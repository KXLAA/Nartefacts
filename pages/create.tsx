import { useCreate } from "@/components/create/controller";
import { ImagePreview } from "@/components/create/ImagePreview";
import { ImageUploader } from "@/components/create/ImageUploader";
import { RecentlyCreated } from "@/components/create/RecentlyCreated";
import { Layout } from "@/components/layout/Layout";

export default function Create() {
  const controller = useCreate();

  return (
    <Layout className="relative flex flex-col items-center w-full max-w-5xl min-h-screen gap-8 p-2 m-auto overflow-hidden">
      <ImageUploader {...controller} />
      <ImagePreview {...controller} />
      <RecentlyCreated {...controller} />
    </Layout>
  );
}
