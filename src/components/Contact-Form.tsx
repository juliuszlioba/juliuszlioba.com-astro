import { useState } from "preact/compat";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  access_key: string;
  botcheck: boolean;
  name: string;
  email: string;
  message_subject: string;
  message: string;
  consent: boolean | undefined;
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);

    let submitData = {
      ...data,
      subject: `${data.name} sent a message from juliuszlioba.com`,
    };

    delete submitData.consent;

    setSendError(false);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submitData, null, 2),
      });
      const responseData = await response.json();
      if (!responseData.success) return setSendError(true);
      setLoading(false);
      return setSent(true);
    } catch {
      setLoading(false);
      setSendError(true);
    }
  };

  return (
    <div
      id="contact-form"
      class={`relative z-0 pb-12 pt-48 duration-300 ${!sent && "mb-[300px]"}`}
    >
      <div class="relative z-10 m-auto max-w-6xl px-4 md:px-8">
        <div class="flex flex-col gap-8 text-center md:flex-row md:text-left">
          <div class="md:w-2/5">
            <p class="uppercase tracking-widest text-gray-400">Contact me.</p>
            <h2 class="font-header mt-2 text-6xl">
              Get in touch! <br />
              Tell me abaut your project.
            </h2>
          </div>
          <div
            className={`rounded-2xl bg-gray-700 px-6 py-8 md:w-3/5 md:p-12 ${
              !sent && "-mb-[300px]"
            } `}
          >
            {sent ? (
              <>
                <p className="font-header text-4xl">Thank you!</p>
                <p className="mt-5 text-lg tracking-wide text-gray-600 dark:text-gray-400">
                  Message was sent. I will answer as soon as I can.
                </p>
              </>
            ) : (
              <>
                <p className="font-header text-4xl">Send me a meessege</p>
                <form
                  className="mt-4 grid grid-cols-1 gap-4 pb-4"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    type="hidden"
                    {...register("access_key", {
                      value: "ca01780a-732f-4c75-82f5-995cba5e1a1b",
                    })}
                  />
                  <input
                    type="checkbox"
                    id=""
                    className="hidden"
                    style={{ display: "none" }}
                    {...register("botcheck")}
                  ></input>

                  <label className="block">
                    <span className="text-gray-300">Name</span>
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      className="mt-1 block w-full rounded-md border-transparent bg-gray-100 py-3 text-black focus:border-transparent focus:bg-white focus:ring-4 focus:ring-orange"
                      placeholder=""
                    />
                    {errors.name && (
                      <p className="mt-1 text-orange dark:text-orange">
                        Please provide a name.
                      </p>
                    )}
                  </label>
                  <label className="block">
                    <span className="text-gray-700 dark:text-gray-300">
                      Email
                    </span>
                    <input
                      {...register("email", {
                        required: "Please provide an email to respond.",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Please enter a valid email",
                        },
                      })}
                      type="text"
                      className="mt-1 block w-full rounded-md border-transparent bg-gray-100 py-3 text-black focus:border-transparent focus:bg-white focus:ring-4 focus:ring-orange"
                      placeholder=""
                    />
                    {errors.email && (
                      <p className="mt-1 text-orange dark:text-orange">
                        {errors.email.message}
                      </p>
                    )}
                  </label>
                  <label className="block">
                    <span className="text-gray-700 dark:text-gray-300">
                      Subject
                    </span>
                    <input
                      {...register("message_subject", { required: true })}
                      type="text"
                      className="mt-1 block w-full rounded-md border-transparent bg-gray-100 py-3 text-black focus:border-transparent focus:bg-white focus:ring-4 focus:ring-orange"
                      placeholder=""
                    />
                    {errors.message_subject && (
                      <p className="mt-1 text-orange dark:text-orange">
                        Please provide a subject.
                      </p>
                    )}
                  </label>
                  <label className="block">
                    <span className="text-gray-700 dark:text-gray-300">
                      Message
                    </span>
                    <textarea
                      {...register("message", { required: true })}
                      className="mt-1 block w-full rounded-md border-transparent bg-gray-100 py-3 text-black focus:border-transparent focus:bg-white focus:ring-4 focus:ring-orange"
                      placeholder=""
                    />
                    {errors.message && (
                      <p className="mt-1 text-orange dark:text-orange">
                        Please writeme your ideas, questions, etc.
                      </p>
                    )}
                  </label>
                  <label className="py-3">
                    <div className="flex items-center justify-center md:justify-start">
                      <input
                        {...register("consent", { required: true })}
                        className="mr-2 h-6 w-6 rounded-md border-transparent bg-gray-100  text-orange focus:border-transparent focus:ring-4 focus:ring-orange focus:ring-offset-0"
                        type="checkbox"
                      />
                      <span className="text-gray-700 dark:text-gray-300">
                        I agree to use my data for processing
                      </span>
                    </div>
                    {errors.consent && (
                      <p className="mt-1 text-orange dark:text-orange">
                        Messege can't be sent without your permision to gather
                        your provided data in form.
                      </p>
                    )}
                  </label>
                  {loading ? (
                    <div
                      className="
                       cursor-pointer
                       rounded-lg bg-orange px-3 py-3
                       text-center text-lg
                       focus:ring-4
                       focus:ring-orange
                      "
                    >
                      Sending a message...
                    </div>
                  ) : (
                    <input
                      className="
                       cursor-pointer
                       rounded-lg
                       bg-orange px-3 py-3 text-lg
                       hover:bg-orange-light focus:ring-4
                       focus:ring-orange
                      "
                      type="submit"
                      value="Send message!"
                    />
                  )}
                  {sendError && (
                    <p className="mt-4 text-orange dark:text-orange">
                      Oh no! There was some connection error with messenger.
                      Please try again and if error persist please try later. Or
                      just send me a messege by other method (email, sms, ...).
                    </p>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      </div>
      <div class={`absolute inset-0 z-0 h-full bg-gray-900 opacity-50`}></div>
    </div>
  );
}
