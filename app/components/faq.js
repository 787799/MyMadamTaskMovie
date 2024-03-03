import Gallery from "./gallery";
import List from "./list";
import ServicesSection from "./section";

export default function FrequentlyAskedQuestions() {
  return (
    <>
      <HowDoesItWork />
      <List title="Latest Movies " index={0} />
      <WorldwideTrust />
      <List title="Upcoming Movies" index={7} />
      <ServicesSection/>
      <Gallery/>
      <Faq />
    </>
  );
}

export function WorldwideTrust() {
  return (
    <>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <div class="text-center space-y-4">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by creators worldwide
            </h2>
            <p class="text-lg leading-8 text-gray-300">
              We can help you grow your audience and your business, no matter
              the size.
            </p>
          </div>
          <dl class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            <div class="flex flex-col bg-white/5 p-8">
              <dt class="text-sm font-semibold leading-6 text-gray-300">
                words written in 2023
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-white">
                12 million
              </dd>
            </div>
            <div class="flex flex-col bg-white/5 p-8">
              <dt class="text-sm font-semibold leading-6 text-gray-300">
                episodes uploaded
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-white">
                10k
              </dd>
            </div>
            <div class="flex flex-col bg-white/5 p-8">
              <dt class="text-sm font-semibold leading-6 text-gray-300">
                hours of media
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-white">
                6.6k
              </dd>
            </div>
            <div class="flex flex-col bg-white/5 p-8">
              <dt class="text-sm font-semibold leading-6 text-gray-300">
                answers
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-white">
                2.1k
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}

export function HowDoesItWork() {
  return (
    <>
      <section id="works" class="relative bg-gray-900 py-10 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-4xl text-white font-extrabold mx-auto md:text-6xl lg:text-5xl">
              How does it work?
            </h2>
            <p class="max-w-2xl mx-auto mt-4 text-base text-gray-400 leading-relaxed md:text-2xl">
              Our AI solution will help you from start to finish
            </p>
          </div>
          <div class="relative mt-12 lg:mt-20">
            <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img
                alt=""
                loading="lazy"
                width="1000"
                height="500"
                decoding="async"
                data-nimg="1"
                class="w-full"
                // style={{color:transparent}}
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              />
            </div>
            <div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span class="text-xl font-semibold text-gray-700">1</span>
                </div>
                <h3 class="mt-6 text-xl  text-white font-semibold leading-tight md:mt-10">
                  Search Movies
                </h3>
                <p class="mt-4 text-base text-gray-400 md:text-lg">
                  Search film accourding to your requirement
                </p>
              </div>
              <div>
                <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span class="text-xl font-semibold text-gray-700">2</span>
                </div>
                <h3 class="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">
                  Click on View
                </h3>
                <p class="mt-4 text-base text-gray-400 md:text-lg">
                  See  details of related movie and let the AI do the rest.
                </p>
              </div>
              <div>
                <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span class="text-xl font-semibold text-gray-700">3</span>
                </div>
                <h3 class="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">
                  Click on play
                </h3>
                <p class="mt-4 text-base text-gray-400 md:text-lg">
                  Enjoy your movie 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Faq() {
  return (
    <div class=" mx-auto md:px-6 xl:px-24">
      <section class="py-10">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-4xl text-white font-extrabold mx-auto md:text-5xl lg:text-4xl">
            Frequently Asked Questions ?
          </h2>
          <p class="max-w-2xl mx-auto mt-4 text-lg text-gray-50 leading-relaxed md:text-xl">
            Our AI solution will help you from start to finish
          </p>
        </div>

        <div>
          <section class="text-gray-700">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div class="w-full lg:w-1/2 px-4 py-2">
                  <details class="mb-4">
                    <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                      How Long is this site live?
                    </summary>

                    <span>
                      Laboris qui labore cillum culpa in sunt quis sint veniam.
                      Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                      minim velit nostrud pariatur culpa magna in aute.
                    </span>
                  </details>
                  <details class="mb-4">
                    <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                      Can I install/upload anything I want on there?
                    </summary>

                    <span>
                      Laboris qui labore cillum culpa in sunt quis sint veniam.
                      Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                      minim velit nostrud pariatur culpa magna in aute.
                    </span>
                  </details>
                  <details class="mb-4">
                    <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                      How can I migrate to another site?
                    </summary>

                    <span>
                      Laboris qui labore cillum culpa in sunt quis sint veniam.
                      Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                      minim velit nostrud pariatur culpa magna in aute.
                    </span>
                  </details>
                </div>
                <div class="w-full lg:w-1/2 px-4 py-2">
                  <details class="mb-4">
                    <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                      Can I change the domain you give me?
                    </summary>

                    <span class="px-4 py-2">
                      Laboris qui labore cillum culpa in sunt quis sint veniam.
                      Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                      minim velit nostrud pariatur culpa magna in aute.
                    </span>
                  </details>
                  <details class="mb-4">
                    <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                      How many sites I can create at once?
                    </summary>

                    <span class="px-4 py-2">
                      Laboris qui labore cillum culpa in sunt quis sint veniam.
                      Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                      minim velit nostrud pariatur culpa magna in aute.
                    </span>
                  </details>
                  <details class="mb-4">
                    <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                      How can I communicate with you?
                    </summary>

                    <span class="px-4 py-2">
                      Laboris qui labore cillum culpa in sunt quis sint veniam.
                      Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                      minim velit nostrud pariatur culpa magna in aute.
                    </span>
                  </details>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
