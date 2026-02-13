import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, User, Mail } from "lucide-react";
import { useEffect } from "react";

const Dashboard = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <main className="min-h-[80vh] flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
      </main>
    );
  }

  if (!user) return null;

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <main className="min-h-[80vh] py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-3xl font-heebo font-bold mb-8">האזור שלי</h1>
        <Card>
          <CardHeader>
            <CardTitle className="font-heebo flex items-center gap-2">
              <User className="h-5 w-5" />
              פרטי חשבון
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">אימייל</p>
                <p className="font-medium" dir="ltr">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <User className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">תאריך הצטרפות</p>
                <p className="font-medium">
                  {new Date(user.created_at).toLocaleDateString("he-IL")}
                </p>
              </div>
            </div>
            <Button variant="destructive" onClick={handleSignOut} className="w-full mt-4">
              <LogOut className="h-4 w-4 ml-2" />
              התנתק
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Dashboard;
