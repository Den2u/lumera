import Head from 'next/head'
import AddressChecker from '../components/AddressChecker'
import QRGenerator from '../components/QRGenerator'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lumera</title>
        <meta name="description" content="Lumera — Digital Trust Gateway" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-primary-dark text-white p-8">
        <h1 className="text-4xl font-bold mb-6 text-primary">LUMERA</h1>
        <p className="text-secondary mb-10">Цифровая честность. Этический код. Связь без границ.</p>
        <AddressChecker />
        <div className="my-10 border-t border-gray" />
        <QRGenerator />
      </main>
    </>
  )
}
