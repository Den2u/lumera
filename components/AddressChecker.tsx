import { useState } from 'react'

export default function AddressChecker() {
  const [address, setAddress] = useState('')
  const [result, setResult] = useState<string | null>(null)

  const handleCheck = () => {
    if (address.startsWith('0x') && address.length === 42) {
      setResult('✅ Адрес безопасен: формат соответствует ETH.')
    } else {
      setResult('⚠️ Внимание: адрес может быть некорректным или подозрительным.')
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Проверка крипто-адреса</h2>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Введите ETH-адрес"
        className="p-2 rounded bg-gray-dark text-white w-full mb-2"
      />
      <button onClick={handleCheck} className="bg-primary text-black px-4 py-2 rounded">
        Проверить
      </button>
      {result && <p className="mt-4">{result}</p>}
    </div>
  )
}
