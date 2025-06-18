import { useState } from 'react'
import QRCode from 'qrcode.react'

export default function QRGenerator() {
  const [wallet, setWallet] = useState('')

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Генерация QR-кода для доната</h2>
      <input
        type="text"
        value={wallet}
        onChange={(e) => setWallet(e.target.value)}
        placeholder="Введите ETH или BTC адрес"
        className="p-2 rounded bg-gray-dark text-white w-full mb-2"
      />
      {wallet && (
        <div className="mt-4">
          <QRCode value={wallet} size={256} fgColor="#00ffff" bgColor="#0A191E" />
        </div>
      )}
    </div>
  )
}
