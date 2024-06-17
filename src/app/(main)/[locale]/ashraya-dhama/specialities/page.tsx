import { getLocale, getTranslations } from "next-intl/server";
import Heading from "~/components/Heading/Heading";
import NearbyPlaces from "~/components/NearbyPlaces/NearbyPlaces";
import VideoSection from "~/components/VideoSection/VideoSection";
import ZigZag from "~/components/ZigZag/ZigZag";
import { fetchVriddhashramaPage } from "~/lib/queries";

export default async function Vridddhashrama() {
  const locale = await getLocale();
  const t = await getTranslations("vridddhashrama");
  const pageData = await fetchVriddhashramaPage(locale);

  return (
    <main className="content-container mx-auto space-y-16 md:space-y-20">
      <section className="mt-12 flex flex-col gap-2 md:gap-4">
        <Heading seperatorColor='secondary'>
          {pageData.title}
        </Heading>
        <p className="body text-justify">{pageData.description}</p>
      </section>

      <ZigZag contents={pageData.features} />
      <VideoSection videoSrc={pageData.videoLink} />
      <NearbyPlaces
        detail={pageData.surrounding_detail}
        locations={pageData.locations}
      />
    </main>
  );
}
