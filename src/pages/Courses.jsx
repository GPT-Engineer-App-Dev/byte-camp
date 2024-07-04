import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Courses = () => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Available Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <h2 className="mt-4 text-xl font-semibold">Course Title 1</h2>
              <p className="mt-2 text-muted-foreground">Short description of the course.</p>
              <Button variant="primary" className="mt-4">Start</Button>
            </div>
            <div className="p-4 border rounded-lg">
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <h2 className="mt-4 text-xl font-semibold">Course Title 2</h2>
              <p className="mt-2 text-muted-foreground">Short description of the course.</p>
              <Button variant="primary" className="mt-4">Start</Button>
            </div>
            <div className="p-4 border rounded-lg">
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <h2 className="mt-4 text-xl font-semibold">Course Title 3</h2>
              <p className="mt-2 text-muted-foreground">Short description of the course.</p>
              <Button variant="primary" className="mt-4">Start</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Courses;