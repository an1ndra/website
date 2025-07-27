import { LoaderCircle } from "lucide-react";

export default function SigninBtn({
  name,
  type,
  isLoading,
}: {
  name: string;
  type: "button" | "submit" | "reset";
  isLoading: boolean;
}) {
  return (
    <button type={type} className="w-full btn btn-primary">
      <div className="flex items-center justify-center gap-2">
        {isLoading ? (
          <LoaderCircle className="animate-spin w-5 h-5 text-blue-500" />
        ) : (
          ""
        )}
        {name}
      </div>
    </button>
  );
}
