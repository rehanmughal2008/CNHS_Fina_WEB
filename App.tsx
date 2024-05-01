import React from "react";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const Image = ({ src, alt, className = "" }: ImageProps) => (
  <img src={src} alt={alt} className={className} loading="lazy" />
);

type SectionTitleProps = {
  children: React.ReactNode;
};

const SectionTitle = ({ children }: SectionTitleProps) => (
  <div className="flex flex-col px-5 my-auto">
    <div>{children}</div>
    <div className="shrink-0 mt-4 h-1.5 bg-blue-600 border-blue-600 border-solid border-[6px]" />
  </div>
);

const SubscribeForm = () => (
  <form className="flex gap-5 justify-end pl-8 mt-14 text-2xl bg-zinc-400 bg-opacity-30 max-md:flex-wrap max-md:pl-5 max-md:mt-10 max-md:max-w-full">
    <label htmlFor="emailInput" className="flex-auto my-auto text-stone-900 sr-only">
      Enter email address
    </label>
    <input
      type="email"
      id="emailInput"
      placeholder="Enter email address"
      className="flex-auto my-auto text-stone-900"
      aria-label="Enter email address"
    />
    <button type="submit" className="justify-center px-7 py-11 font-semibold text-white whitespace-nowrap bg-blue-600 max-md:px-5">
      Subscribe
    </button>
  </form>
);

const MyComponent = () => (
  <div className="flex flex-col items-center bg-indigo-100">
    <header className="flex gap-5 justify-between items-center self-stretch px-7 py-6 w-full text-xl font-semibold bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <nav className="flex gap-2.5 self-stretch my-auto text-2xl text-black">
        <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/1916bd1ad14894818995564942a042acadd5d6326fd8a910c50586345d63bab7?apiKey=f68380a79fd5456e86a37730f36ed8b2&" alt="Logo" className="shrink-0 w-9 aspect-[1.12] fill-blue-600" />
        <div className="flex-auto">Financial Literacy</div>
      </nav>
      <div className="flex gap-5 justify-between items-start self-stretch my-auto whitespace-nowrap text-stone-900">
        <div className="self-stretch">Sections</div>
        <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f7be688eaba2d7d0cb7af7327ef8f6f63ac9fde509d81a959bd4fea256f071e?apiKey=f68380a79fd5456e86a37730f36ed8b2&" alt="Dropdown icon" className="shrink-0 mt-2 aspect-[1.49] fill-stone-900 w-[15px]" />
        <div className="flex gap-4">
          <div>Syllabus</div>
          <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f7be688eaba2d7d0cb7af7327ef8f6f63ac9fde509d81a959bd4fea256f071e?apiKey=f68380a79fd5456e86a37730f36ed8b2&" alt="Right arrow" className="shrink-0 my-auto aspect-[1.49] fill-stone-900 w-[15px]" />
        </div>
      </div>
      <div className="flex gap-4 self-stretch">
        <div className="justify-center px-8 py-3 text-blue-600 bg-white rounded-xl border border-blue-600 border-solid max-md:px-5">Log in</div>
        <div className="justify-center px-6 py-3 text-white bg-blue-600 rounded-xl max-md:px-5">Sign up</div>
      </div>
    </header>
    <main className="flex flex-col justify-center p-0.5 mt-12 w-full rounded-xl bg-stone-900 bg-opacity-70 max-w-[1314px] max-md:mt-10 max-md:max-w-full">
      <section className="flex overflow-hidden relative flex-col items-start p-20 w-full min-h-[734px] max-md:px-5 max-md:max-w-full">
        <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6a49090ab789ef6bab4efaa6e365d967f37e1b02667c257c57b473d4c90ed2e?apiKey=f68380a79fd5456e86a37730f36ed8b2&" alt="Educational content background" className="object-cover absolute inset-0 size-full" />
        <div className="relative mt-12 text-5xl font-semibold text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Sports & Entertainment marketing,<br /> Business Law & Ethics,<br /> and Business Law and Contracts.
        </div>
        <div className="relative mt-11 text-2xl text-white max-md:mt-10 max-md:max-w-full">
          Learn everything there is to know about financial literacy.<br />
          This is where notes, documents, course units, and other important articles
          <br /> Will be displayed.
        </div>
        <SubscribeForm />
      </section>
    </main>
    <footer className="flex flex-col items-center self-stretch px-16 pt-16 pb-9 mt-16 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[825px]">
        <SectionTitle>Receive Notifications & Updates</SectionTitle>
        <div className="mx-5 mt-12 text-2xl font-medium text-center text-neutral-700 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          Subscribe to receive notifications when new resources are posted or want to get daily finance news
        </div>
        <SubscribeForm />
        <div className="self-center mt-32 text-xl font-medium text-stone-900 max-md:mt-10 max-md:max-w-full">
          All rights reserved <span className="font-semibold">Colts Neck Highschool / FRHSD School District</span>
        </div>
        <div className="flex gap-2.5 self-center mt-6 font-light text-stone-900">
          <div className="justify-center py-1.5 text-sm whitespace-nowrap rounded-full border border-solid border-stone-900 stroke-[1px]">C</div>
          <div className="flex-auto text-xl">2024 CNHS Hackclub</div>
        </div>
      </div>
    </footer>
  </div>
);

export default MyComponent;
