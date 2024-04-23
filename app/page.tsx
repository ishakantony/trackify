import Image from "next/image";

export default function Home() {
  return (
    <main className="my-8 flex max-w-screen-xl  flex-col md:gap-y-36">
      <section className="flex flex-col items-center justify-between p-8 md:flex-row md:p-4 lg:p-0">
        <div>
          <h2 className="text-6xl">Master Planer</h2>
          <p className="mt-4 max-w-xl text-teal-400">
            Experience seamless organization with{" "}
            <span className="border-b-4">Trackify</span>! Master the art of
            planning and keep everything at your fingertips, accessible from
            anywhere, anytime. Say goodbye to missed details—
            <span className="border-b-4">Trackify</span> ensures you never lose
            track again. Elevate your efficiency with our leading-edge SaaS
            solution!
          </p>
        </div>
        <Image
          src="/undraw_master_plan_re_jvit.svg"
          width={500}
          height={500}
          alt="master plan"
        />
      </section>
      <section className="flex flex-col items-center justify-between p-8 md:flex-row md:p-4 lg:p-0">
        <Image
          src="/undraw_prioritise_re_r5xu.svg"
          width={300}
          height={300}
          alt="prioritize"
        />
        <div>
          <h2 className="text-6xl">Prioritize The Right Thing</h2>
          <p className="mt-4 max-w-xl text-teal-400">
            With <span className="border-b-4">Trackify</span>, empower your
            decision-making like never before. Prioritize effortlessly with all
            critical information visible and within reach, ensuring that every
            choice you make is informed and deliberate. Experience unmatched
            smoothness in decision-making with{" "}
            <span className="border-b-4">Trackify</span>, where clarity meets
            convenience.
          </p>
        </div>
      </section>
    </main>
  );
}
