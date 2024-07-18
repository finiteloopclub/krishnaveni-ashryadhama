import LocaleLink from "../ui/LocaleLink";
import { useTranslations } from "next-intl";

export default async function Video({ videos }: { videos: string[] }) {
  const t = useTranslations("home.video");
  return (
    <>
      {videos.slice(-3).map((item, index) => (
        <div key={index}>
          <iframe
            src={item}
            title="YouTube video player"
            referrerPolicy="no-referrer"
            className="rounded-lg"
            allowFullScreen
          ></iframe>
          {index === videos.length - 1 && (
            <div className="flex justify-end">
              <LocaleLink href="/events" className="underline body pt-2">
                {t("more")}
              </LocaleLink>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
