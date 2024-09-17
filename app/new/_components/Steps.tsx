import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Stepper from "./steps/Stepper";

function Steps() {
  return (
    <Card className="lg:w-1/2">
      <CardHeader>
        <CardTitle>Invoice Details</CardTitle>
        <CardDescription>
          Review and manage your invoice information.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Stepper />
      </CardContent>
    </Card>
  );
}

export default Steps;
