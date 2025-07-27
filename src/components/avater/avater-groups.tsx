import Image from "next/image";
export default function AvaterGroups(){
    return (
      <div>
        <div className="avatar-group -space-x-4">
          <div className="avatar">
            <div className="w-6">
              <Image src="/avater.webp" alt="profile" width={0} height={0} />
            </div>
          </div>
          <div className="avatar">
            <div className="w-6">
              <Image src="/avater.webp" alt="profile" width={0} height={0} />
            </div>
          </div>
          <div className="avatar">
            <div className="w-6">
              <Image src="/avater.webp" alt="profile" width={0} height={0} />
            </div>
          </div>
          <div className="avatar avatar-placeholder">
            <div className="bg-neutral text-neutral-content w-6">
              <span>+12</span>
            </div>
          </div>
        </div>
      </div>
    );
}