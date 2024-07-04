import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SettingsPage = () => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john.doe@example.com" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="********" />
            </div>
            <Button variant="primary" type="submit">Update Account</Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="email-notifications" />
              <Label htmlFor="email-notifications">Email Notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="sms-notifications" />
              <Label htmlFor="sms-notifications">SMS Notifications</Label>
            </div>
            <Button variant="primary" type="submit">Update Notifications</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;