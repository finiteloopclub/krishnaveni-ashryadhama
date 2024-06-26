"use client";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import Heading from "~/components/Heading/Heading";
import RolesAndDescrptions from "~/components/RolesAndDescrptions/RolesAndDescrptions";
import Dialog, { DialogRef } from "~/components/ui/Dialog";
import { CareerType } from "~/lib/types";
import RichText from "../RichText/RichText";

export default function Career({ data }: { data: CareerType }) {
  const dialogRef = useRef<DialogRef>(null);
  const t = useTranslations("career");
  return (
    <>
      <main className="content-container space-y-8">
        <section className="flex md:gap-4 gap-2 flex-col pt-20">
          <h2 className="text-gray-900 text-left heading w-fit capitalize">
            <Heading>{data.title}</Heading>
          </h2>
          <RichText value={data.description} />

          <span
            onClick={() => dialogRef.current?.open()}
            className="text-blue-600 underline cursor-pointer"
          >
            {t("question")}
          </span>
        </section>
        <div className="flex flex-col md:gap-12 gap-6">
          <Heading className="w-max" seperatorColor="secondary">
            {t("heading")}
          </Heading>
          <RolesAndDescrptions data={data} />
        </div>
      </main>

      <Dialog
        ref={dialogRef}
        className="md:max-w-sm lg:max-w-md max-w-80 rounded mx-auto p-4 md:p-6 md:px-8 outline-none"
      >
        <div>
          <h2 className="heading mb-4 ">{t("dialog.heading")}</h2>
          <p className="text-gray-600 font-semibold">{data.howtoapply} </p>
        </div>
      </Dialog>
    </>
  );
}
