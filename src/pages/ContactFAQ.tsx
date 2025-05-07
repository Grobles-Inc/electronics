import React, { useState } from 'react';
import { formatWhatsappContact } from '../utils/whatsapp';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  children: React.ReactNode;
}

function FAQItem({ question, children }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-4 border-b last:border-b-0">
      <button
        type="button"
        className="flex items-center w-full justify-between font-semibold cursor-pointer focus:outline-none text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <ChevronDown
          className={`ml-2 transition-transform duration-300 ${open ? 'rotate-180 text-green-600' : 'rotate-0 text-gray-500'}`}
          size={22}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 mt-2 opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ willChange: 'max-height, opacity' }}
      >
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  );
}

export default function ContactFAQ() {
  const [form, setForm] = useState({ nombre: '', correo: '', celular: '', mensaje: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.correo || !form.celular || !form.mensaje) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    setError('');
    const url = formatWhatsappContact(form, /Android|iPhone/i.test(navigator.userAgent) ? 'mobile' : 'web');
    window.open(url, '_blank');
    setForm({ nombre: '', correo: '', celular: '', mensaje: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Preguntas frecuentes */}
        <div>
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Preguntas frecuentes</h2>
          <div>
            <FAQItem question="¿Cuánto tiempo se tarda en procesar un pedido?">
              Luego de confirmar su pedido, procesaremos el producto de 1 a 2 días hábiles. Si lo quiere con urgencia podemos manejarlo con previo acuerdo y disponibilidad del transporte.
            </FAQItem>
            <FAQItem question="¿Qué métodos de pagos aceptan?">
              Puedes pagar con:
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                <li>Contra entrega. Primero le entregamos el producto y luego paga</li>
                <li>Pagos con Yape o plin</li>
                <li>Transferencia bancaria</li>
                <li>Con tarjeta de debito o crédito</li>
              </ul>
            </FAQItem>
            <FAQItem question="¿Cuál es su política de devolución?">
              Somos muy cuidadosos y selectos antes de enviar el producto a su domicilio. Lo decimos por experiencia y errores cometidos en el pasado.<br />
              Nos aseguramos de que el producto esté sellado, sin haber manipulado antes, sobre todo nos interesa que pueda tener la mejor experiencia de uso
            </FAQItem>
            <FAQItem question="¿El delivery es gratis?">
              El delivery es GRATIS solo para <span className="font-bold">Lima Metropolitana</span>.<br />
              También si hace pedidos mayores a 200 soles el delivery puede ser gratis dependiendo la zona dentro de Lima.<br />
              Si desea que enviemos su pedido al interior del PERU, el costo del envío será de S/. 20.00.
            </FAQItem>
          </div>
        </div>
        {/* Formulario de contacto */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contáctanos para cualquier pregunta</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Tu nombre</label>
                <input name="nombre" value={form.nombre} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Tu correo</label>
                <input name="correo" type="email" value={form.correo} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium">Número de celular</label>
              <input name="celular" value={form.celular} onChange={handleChange} className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Tu mensaje</label>
              <textarea name="mensaje" value={form.mensaje} onChange={handleChange} className="w-full border rounded px-3 py-2 min-h-[120px]" />
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <button type="submit" className="bg-green-500 text-white font-bold px-6 py-2 rounded hover:bg-green-600 transition">Haz una pregunta</button>
          </form>
        </div>
      </div>
    </div>
  );
}
