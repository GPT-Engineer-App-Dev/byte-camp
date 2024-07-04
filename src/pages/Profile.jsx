import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>User Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4">
            <img src="/placeholder.svg" alt="Profile" className="mx-auto object-cover w-24 h-24 rounded-full" />
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-muted-foreground">john.doe@example.com</p>
            <p className="text-muted-foreground">A passionate coder and lifelong learner.</p>
            <Button variant="primary">Edit Profile</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Enrolled Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">Course Title 1</h3>
              <p className="text-muted-foreground">Short description of the course.</p>
              <Button variant="primary" className="mt-2">Continue</Button>
            </li>
            <li className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">Course Title 2</h3>
              <p className="text-muted-foreground">Short description of the course.</p>
              <Button variant="primary" className="mt-2">Continue</Button>
            </li>
            <li className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">Course Title 3</h3>
              <p className="text-muted-foreground">Short description of the course.</p>
              <Button variant="primary" className="mt-2">Continue</Button>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;