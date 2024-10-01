import Heading from "@/components/layout/heading";
import { Form, FormInstance, Input } from "antd";
import React from "react";
interface Props {
  form: FormInstance<any>;
  onFinish: (values: any) => void;
}

const CheckoutForm = ({ form, onFinish }: Props) => {
  return (
    <div className="w-full lg:w-2/3">
      <div className="bg-white p-10 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-light mb-8 !text-[#8B7355] border-b border-[#e0d8c9] pb-4">
          Información Personal
        </h3>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Form.Item
              name="first_name"
              label="Nombre"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese su nombre",
                  max: 50,
                },
                {
                  pattern: /^[a-zA-Z\s]*$/,
                  message: "Por favor ingrese un nombre válido",
                },
              ]}
            >
              <Input className="border-[#8B7355] focus:border-[#A08B6C] focus:ring-[#A08B6C] rounded-md shadow-sm" />
            </Form.Item>
            <Form.Item
              name="last_name"
              label="Apellido"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese su apellido",
                  max: 50,
                },
                {
                  pattern: /^[a-zA-Z\s]*$/,
                  message: "Por favor ingrese un apellido válido",
                },
              ]}
            >
              <Input className="border-[#8B7355] focus:border-[#A08B6C] focus:ring-[#A08B6C] rounded-md shadow-sm" />
            </Form.Item>
            <Form.Item
              name="dni"
              label="DNI"
              rules={[
                { required: true, message: "Por favor ingrese su DNI" },
                {
                  pattern: /^[0-9]{7,9}$/,
                  message: "Por favor ingrese un DNI válido",
                },
              ]}
            >
              <Input className="border-[#8B7355] focus:border-[#A08B6C] focus:ring-[#A08B6C] rounded-md shadow-sm" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese su email",
                },
                {
                  type: "email",
                  message: "Por favor ingrese un email válido",
                },
              ]}
            >
              <Input className="border-[#8B7355] focus:border-[#A08B6C] focus:ring-[#A08B6C] rounded-md shadow-sm" />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Número de Teléfono"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese su número de teléfono",
                },
                {
                  pattern: /^[0-9]{8,14}$/,
                  message: "Por favor ingrese un número válido",
                },
              ]}
            >
              <Input className="border-[#8B7355] focus:border-[#A08B6C] focus:ring-[#A08B6C] rounded-md shadow-sm" />
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CheckoutForm;
