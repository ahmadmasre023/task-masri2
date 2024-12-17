import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// التحقق باستخدام Zod
const productSchema = z.object({
  name: z.string().min(1, 'اسم المنتج مطلوب'),
  price: z.number().positive('السعر يجب أن يكون رقماً موجباً'),
});

const FormComponent = ({ onAddProduct }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = (data) => {
    onAddProduct({ name: data.name, price: parseFloat(data.price) });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto"
    >
      <div className="flex flex-col gap-4">
        <input
          {...register('name')}
          placeholder="اسم المنتج"
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        <input
          {...register('price', { valueAsNumber: true })}
          placeholder="سعر المنتج"
          type="number"
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition"
        >
          إضافة المنتج
        </button>
      </div>
    </form>
  );
};

export default FormComponent;