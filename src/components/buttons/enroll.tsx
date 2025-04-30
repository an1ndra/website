import { ArrowRight } from "lucide-react";
export default function EnrollNowBtn({name}:{name:string}){
    return (
      <button className="w-full btn btn-neutral flex items-center justify-center">
        <span>{name}</span>
        <ArrowRight className="h-4 w-4 ml-2" />
      </button>
    );
}