import ContactInformation from "@/components/contact-information";

export default function BiratExpo2025Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <ContactInformation year={2025} />
    </>
  );
}
