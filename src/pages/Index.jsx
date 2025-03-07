import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to CodeMaster</h1>
        <p className="text-lg text-muted-foreground">Your journey to mastering code starts here.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Featured Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <h2 className="mt-4 text-xl font-semibold">Course Title 1</h2>
              <p className="mt-2 text-muted-foreground">Short description of the course.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <h2 className="mt-4 text-xl font-semibold">Course Title 2</h2>
              <p className="mt-2 text-muted-foreground">Short description of the course.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <h2 className="mt-4 text-xl font-semibold">Course Title 3</h2>
              <p className="mt-2 text-muted-foreground">Short description of the course.</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="p-4 border rounded-lg">
              <p className="text-muted-foreground">You completed "Introduction to JavaScript".</p>
            </li>
            <li className="p-4 border rounded-lg">
              <p className="text-muted-foreground">You started "Advanced CSS Techniques".</p>
            </li>
            <li className="p-4 border rounded-lg">
              <p className="text-muted-foreground">You enrolled in "React for Beginners".</p>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;