import Head from "next/head";
import Image from "next/image";

export default function License({ posts }) {
  return (
    <>
      <Head>
        <title>{"Lisensi Artikel"}</title>
      </Head>

      <main>
          <Image src="https://licensebuttons.net/l/by-nc-nd/3.0/88x31.png" width={88} height={31} />
          <p>Artikel dilisensikan dengan lisensi CC BY-NC-ND 4.0. Artikel boleh dipublikasikan kembali selama memenuhi ketentuan berikut:</p>
          <ul>
              <li>Digunakan untuk keperluan non-komersial</li>
              <li>Menyertakan kredit kepada penulis dan <i>link</i> ke halaman artikel</li>
          </ul>
      </main>
    </>
  );
}
