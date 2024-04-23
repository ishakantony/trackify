import Image from "next/image";

export default function NotFound() {
  return (
    <div className="my-auto p-8 md:p-0">
      <Image
        src="/undraw_empty_re_opql.svg"
        width={500}
        height={500}
        alt="resource not found"
      />
      <p className="my-2 text-center text-slate-500">
        Looks like we could not find what you are looking for!
      </p>
    </div>
  );
}
