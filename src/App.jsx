import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  DatePicker,
  Switch,
  Image,
} from 'antd';
import './App.less';
import logo from './images/logo.png';

const App = () => {

  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

   const [password, setPassword] = useState('');

  function generatePassword () {
    fetch('https://random.justyy.workers.dev/api/random/?cached&n=20')
      .then(response => response.json())
      .then(data => setPassword(data));
  }

    return (
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
          remember: true,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Formular Größe" name="size">
          <Radio.Group>
            <Radio.Button value="small">Klein</Radio.Button>
            <Radio.Button value="default">Standard</Radio.Button>
            <Radio.Button value="large">Groß</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Benutzername"
          name="username"
          rules={[
            {
              required: false,
              message: 'Bitte trage deinen Benutzernamen ein!',
            },
          ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label="Passwort"
          name="password"
          rules={[
            {
              required: false,
              message: 'Bitte trage dein Passwort ein!',
            },
          ]}
        >
          <Input.Password value={password} />
          <Button type="primary" htmlType="submit" onClick={generatePassword}>
            Passwort generieren
          </Button>
        </Form.Item>

        <Form.Item label="Geschlecht">
          <Select>
            <Select.Option value="male">Männlich</Select.Option>
            <Select.Option value="female">Weiblich</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Geburtsdatum">
          <DatePicker/>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
          valuePropName="checked"
        >
          <Switch/>
        </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Abschicken
        </Button>
      </Form.Item>
    </Form>
    );

};

export default App;
