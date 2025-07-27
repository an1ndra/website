import { ArrowRight } from "lucide-react";
export default function EnrollNowBtn({name}:{name:string}){
    return (
      <button className="w-full btn btn-soft flex items-center justify-center dark:bg-blue-600">
        <span>{name}</span>
        <ArrowRight className="h-4 w-4 ml-2" />
      </button>
    );
}