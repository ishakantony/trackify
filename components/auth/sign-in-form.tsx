import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { TrackifyLogoFull } from "../common/trackify-logo-full";
import { Button } from "../ui/button";

export const SignInForm = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <TrackifyLogoFull className="mx-auto mb-4 w-48" />
        <CardTitle>Sign In to your Account</CardTitle>
        <CardDescription>
          Welcome back! Select method to sign in:
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>TODO - Form</p>
      </CardContent>
      <CardFooter className="flex items-center justify-center text-xs text-slate-500">
        <p>Don&apos;t have an account?</p>
        <Link href="/sign-up">
          <Button variant="link" size="sm">
            Create an account
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
