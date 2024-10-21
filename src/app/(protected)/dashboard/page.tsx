import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  User,
  Edit,
  LockIcon,
  LogOut,
  CheckCircle,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";

const UserDashboard = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    lastLogin: "2024-10-20 14:30",
    twoFAEnabled: true,
    role: "admin",
  };

  const activityLog = [
    { type: "login", device: "Chrome on Windows", timestamp: "-" },
    { type: "2fa", device: "Chrome on Windows", timestamp: "-" },
    { type: "alert", message: "New device detected", timestamp: "-" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">User Dashboard</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/api/placeholder/100/100" alt={user.name} />
                <AvatarFallback>
                  <User size={48} />
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-500">{user.email}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant={user.twoFAEnabled ? "default" : "secondary"}>
                  {user.twoFAEnabled ? "2FA Enabled" : "2FA Not Set Up"}
                </Badge>
                <Badge variant={user.role === "admin" ? "destructive" : "outline"}>
                  <ShieldCheck className="mr-1 h-3 w-3" />
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </Badge>
              </div>
              {/* <p className="text-sm text-gray-500">Last login: {user.lastLogin}</p> */}

              <div className="space-x-4">
                <Button variant="outline" size="sm">
                  <Edit className="mr-2 h-4 w-4" /> Edit Profile
                </Button>
                <Button variant="outline" size="sm">
                  <LockIcon className="mr-2 h-4 w-4" /> Manage 2FA
                </Button>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Activity Log</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Type</TableHead>
                      <TableHead>Details</TableHead>
                      <TableHead>Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {activityLog.map((activity, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          {activity.type === "login" && <CheckCircle className="text-green-500" />}
                          {activity.type === "2fa" && <LockIcon className="text-blue-500" />}
                          {activity.type === "alert" && (
                            <AlertTriangle className="text-yellow-500" />
                          )}
                        </TableCell>
                        <TableCell>
                          {activity.type === "alert"
                            ? activity.message
                            : `${activity.type} from ${activity.device}`}
                        </TableCell>
                        <TableCell>{activity.timestamp}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="mt-4 flex justify-end">
                  <Button variant="destructive" size="sm">
                    <LogOut className="mr-2 h-4 w-4" /> Logout
                  </Button>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;
