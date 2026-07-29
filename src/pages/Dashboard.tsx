import { useState, useEffect } from "react";
import {
  Plus,
  Search,
  Phone,
  MapPin,
  Briefcase,
  DollarSign,
  Trash2,
  Edit2,
  CheckCircle,
  Clock,
  AlertCircle,
  FileText,
  TrendingUp,
  Users,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Client {
  id: string;
  name: string;
  phone: string;
  email: string;
  projectType: string;
  status: "new" | "quote" | "active" | "completed";
  budget: number;
  address: string;
  notes: string;
  createdAt: string;
}

const INITIAL_CLIENTS: Client[] = [
  {
    id: "1",
    name: "ישראל ישראלי",
    phone: "050-1234567",
    email: "israel@gmail.com",
    projectType: "שיפוץ קומפלט לדירת 4 חדרים",
    status: "active",
    budget: 180000,
    address: "הרצל 45, ראשון לציון",
    notes: "כולל הריסת קירות, אינסטלציה חדשה וריצוף 80x80",
    createdAt: "2024-02-15"
  },
  {
    id: "2",
    name: "מיכל כהן",
    phone: "052-7654321",
    email: "michal@cohen.co.il",
    projectType: "תוספת בנייה ומרפסת שמש",
    status: "quote",
    budget: 120000,
    address: "האורנים 12, כפר סבא",
    notes: "ממתינה לאישור מהנדס ועירייה. הצעת מחיר נשלחה",
    createdAt: "2024-02-18"
  },
  {
    id: "3",
    name: "דוד לוי",
    phone: "054-9876543",
    email: "david@levy-ins.co.il",
    projectType: "עבודות איטום וצבע חיצוני",
    status: "completed",
    budget: 45000,
    address: "שדרות רוטשילד 88, תל אביב",
    notes: "העבודה הסתיימה בהצלחה, שולם במלואו",
    createdAt: "2024-01-10"
  },
  {
    id: "4",
    name: "רונית אברהם",
    phone: "053-1112223",
    email: "ronit.ab@outlook.com",
    projectType: "בניית שלד בית פרטי",
    status: "new",
    budget: 450000,
    address: "החרוב 3, קיסריה",
    notes: "ליד חדש מהאתר. תיאמנו פגישה באתר הבנייה ליום שלישי",
    createdAt: "2024-02-20"
  }
];

const Dashboard = () => {
  const [clients, setClients] = useState<Client[]>(() => {
    const saved = localStorage.getItem("construction_crm_clients");
    return saved ? JSON.parse(saved) : INITIAL_CLIENTS;
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    status: "new" as Client["status"],
    budget: "",
    address: "",
    notes: ""
  });

  useEffect(() => {
    localStorage.setItem("construction_crm_clients", JSON.stringify(clients));
  }, [clients]);

  const handleOpenAddModal = () => {
    setEditingClient(null);
    setFormData({
      name: "",
      phone: "",
      email: "",
      projectType: "",
      status: "new",
      budget: "",
      address: "",
      notes: ""
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (client: Client) => {
    setEditingClient(client);
    setFormData({
      name: client.name,
      phone: client.phone,
      email: client.email,
      projectType: client.projectType,
      status: client.status,
      budget: client.budget.toString(),
      address: client.address,
      notes: client.notes
    });
    setIsModalOpen(true);
  };

  const handleDeleteClient = (id: string) => {
    if (confirm("האם אתה בטוח שברצונך למחוק לקוח זה?")) {
      setClients(clients.filter(c => c.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("נא למלא שם וטלפון");
      return;
    }

    const clientData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      projectType: formData.projectType,
      status: formData.status,
      budget: Number(formData.budget) || 0,
      address: formData.address,
      notes: formData.notes
    };

    if (editingClient) {
      // Edit
      setClients(clients.map(c => c.id === editingClient.id ? { ...c, ...clientData } : c));
    } else {
      // Add
      const newClient: Client = {
        id: Date.now().toString(),
        ...clientData,
        createdAt: new Date().toISOString().split("T")[0]
      };
      setClients([newClient, ...clients]);
    }
    setIsModalOpen(false);
  };

  const handleQuickStatusChange = (id: string, newStatus: Client["status"]) => {
    setClients(clients.map(c => c.id === id ? { ...c, status: newStatus } : c));
  };

  // Stats calculations
  const totalBudget = clients.reduce((sum, c) => sum + c.budget, 0);
  const activeProjects = clients.filter(c => c.status === "active").length;
  const newLeads = clients.filter(c => c.status === "new").length;
  const completedProjects = clients.filter(c => c.status === "completed").length;

  // Filtered clients
  const filteredClients = clients.filter(client => {
    const matchesSearch = 
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.phone.includes(searchTerm) ||
      client.projectType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.address.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || client.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: Client["status"]) => {
    switch (status) {
      case "new":
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 flex items-center gap-1 w-fit"><AlertCircle className="h-3.5 w-3.5" /> ליד חדש</span>;
      case "quote":
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 flex items-center gap-1 w-fit"><FileText className="h-3.5 w-3.5" /> הצעת מחיר</span>;
      case "active":
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 flex items-center gap-1 w-fit"><Clock className="h-3.5 w-3.5" /> בביצוע</span>;
      case "completed":
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 flex items-center gap-1 w-fit"><CheckCircle className="h-3.5 w-3.5" /> הושלם</span>;
    }
  };

  const exportToCSV = () => {
    const headers = ["שם", "טלפון", "אימייל", "סוג פרויקט", "סטטוס", "תקציב", "כתובת", "הערות", "תאריך יצירה"];
    const rows = clients.map(c => [
      c.name,
      c.phone,
      c.email,
      c.projectType,
      c.status,
      c.budget,
      c.address,
      c.notes,
      c.createdAt
    ]);
    
    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(e => e.map(val => `"${String(val).replace(/"/g, '""')}"`).join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `clients_export_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900/40 pb-12">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-6 mb-8 shadow-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-primary flex items-center gap-2">
              🔨 מערכת CRM לניהול לקוחות ופרויקטים
            </h1>
            <p className="text-muted-foreground mt-1">
              נהל את הלידים, הצעות המחיר והפרויקטים הפעילים שלך במקום אחד
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={exportToCSV} variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              ייצוא לאקסל (CSV)
            </Button>
            <Button onClick={handleOpenAddModal} className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold flex items-center gap-2">
              <Plus className="h-5 w-5" />
              הוספת לקוח חדש
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground font-medium">סה"כ תקציב פרויקטים</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                ₪{totalBudget.toLocaleString()}
              </h3>
            </div>
            <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6" />
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground font-medium">פרויקטים בביצוע</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                {activeProjects}
              </h3>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-lg">
              <Briefcase className="h-6 w-6" />
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground font-medium">לידים חדשים</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                {newLeads}
              </h3>
            </div>
            <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 p-3 rounded-lg">
              <Users className="h-6 w-6" />
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground font-medium">פרויקטים שהושלמו</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                {completedProjects}
              </h3>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 p-3 rounded-lg">
              <CheckCircle className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="חיפוש לפי שם, טלפון, פרויקט או כתובת..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-10 pl-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {[
              { id: "all", label: "הכל" },
              { id: "new", label: "לידים חדשים" },
              { id: "quote", label: "הצעות מחיר" },
              { id: "active", label: "בביצוע" },
              { id: "completed", label: "הושלמו" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setStatusFilter(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  statusFilter === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clients List / Table */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          {filteredClients.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-muted-foreground text-lg">לא נמצאו לקוחות התואמים את החיפוש או הסינון.</p>
              <Button onClick={handleOpenAddModal} className="mt-4 bg-primary text-primary-foreground">
                הוסף לקוח ראשון
              </Button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-sm font-semibold">
                    <th className="p-4">שם הלקוח</th>
                    <th className="p-4">פרטי קשר</th>
                    <th className="p-4">סוג הפרויקט</th>
                    <th className="p-4">תקציב</th>
                    <th className="p-4">סטטוס</th>
                    <th className="p-4">הערות</th>
                    <th className="p-4 text-left">פעולות</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-sm">
                  {filteredClients.map((client) => (
                    <tr key={client.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="p-4 font-bold text-slate-900 dark:text-white">
                        {client.name}
                        <div className="text-xs text-muted-foreground font-normal mt-0.5">
                          נוסף ב-{client.createdAt}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-col gap-1">
                          <a href={`tel:${client.phone}`} className="flex items-center gap-1.5 text-primary hover:underline">
                            <Phone className="h-3.5 w-3.5" />
                            {client.phone}
                          </a>
                          {client.email && (
                            <span className="text-xs text-muted-foreground">{client.email}</span>
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-medium text-slate-800 dark:text-slate-200">{client.projectType}</div>
                        {client.address && (
                          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                            <MapPin className="h-3 w-3" />
                            {client.address}
                          </div>
                        )}
                      </td>
                      <td className="p-4 font-bold text-slate-900 dark:text-white">
                        ₪{client.budget.toLocaleString()}
                      </td>
                      <td className="p-4">
                        <div className="flex flex-col gap-2">
                          {getStatusBadge(client.status)}
                          <select
                            value={client.status}
                            onChange={(e) => handleQuickStatusChange(client.id, e.target.value as Client["status"])}
                            className="text-xs border border-slate-200 dark:border-slate-800 rounded px-1.5 py-1 bg-white dark:bg-slate-950 focus:outline-none focus:ring-1 focus:ring-primary w-28"
                          >
                            <option value="new">ליד חדש</option>
                            <option value="quote">הצעת מחיר</option>
                            <option value="active">בביצוע</option>
                            <option value="completed">הושלם</option>
                          </select>
                        </div>
                      </td>
                      <td className="p-4 max-w-xs truncate text-slate-600 dark:text-slate-400" title={client.notes}>
                        {client.notes || "-"}
                      </td>
                      <td className="p-4 text-left">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleOpenEditModal(client)}
                            className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                            title="ערוך לקוח"
                          >
                            <Edit2 className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteClient(client.id)}
                            className="p-1.5 hover:bg-red-50 dark:hover:bg-red-950/30 rounded text-slate-600 dark:text-slate-400 hover:text-red-600 transition-colors"
                            title="מחק לקוח"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in-up">
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl max-w-lg w-full overflow-hidden">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {editingClient ? "עריכת פרטי לקוח" : "הוספת לקוח חדש"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-2xl font-bold"
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">שם מלא *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">טלפון *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">אימייל</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">תקציב פרויקט (₪)</label>
                  <input
                    type="number"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">סוג הפרויקט / תיאור קצר</label>
                <input
                  type="text"
                  placeholder="לדוגמה: שיפוץ מקלחת, בניית שלד..."
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">כתובת הפרויקט</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">סטטוס</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as Client["status"] })}
                    className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  >
                    <option value="new">ליד חדש</option>
                    <option value="quote">הצעת מחיר</option>
                    <option value="active">בביצוע</option>
                    <option value="completed">הושלם</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">הערות ודגשים מיוחדים</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                >
                  ביטול
                </Button>
                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground font-bold"
                >
                  {editingClient ? "שמור שינויים" : "הוסף לקוח"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
