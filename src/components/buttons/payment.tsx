export default function PaymentBtn({ name }: { name: string }) {
  return (
    <div>
      <button type="submit" className="mt-4 btn btn-neutral w-full">
        {name}
      </button>
    </div>
  );
}
