import { Button, Form, Input } from "antd"
import { useContentful } from "contexts/contentful/ContentfulContext"
import { useState } from "react"
import { FundamentalInput } from "./FundamentalInput"

type SimpleFormFields = {
  name: string,
  organization?: string,
  email: string,
  message: string,
}

export function SimpleContactForm() {
  const [submitLoading, setSubmitLoading] = useState<boolean>()
  const [submitted, setSubmitted] = useState<boolean>()

  const { pageSpecificContent: homepageContent } = useContentful()
  const [form] = Form.useForm<SimpleFormFields>()

  const onFormSubmit = () => {
    setSubmitLoading(true)
    // TODO: Send email to {constants/project.ts/projectContactEmail}
    setSubmitLoading(false)
    setSubmitted(true)
  }
  return (
    <Form form={form} onFinish={onFormSubmit} id="#contactForm">
      <Form.Item name='name' label="Name" required>
        <FundamentalInput />
      </Form.Item>
      <Form.Item name='organization' label="Organization">
        <FundamentalInput />
      </Form.Item>
      <Form.Item name='email' label="Email" required>
        <FundamentalInput />
      </Form.Item>
      <Form.Item name='message' label="Enquiry" required>
        <Input.TextArea autoSize={{ minRows: 3, maxRows: 3 }} className="mt-1 md:mt-11" />
      </Form.Item>
      <br/>
      <br/>
      <div className='flex flex-col gap-4 md:mt-3'>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          loading={submitLoading}
        >
          {homepageContent.contactSectionButtonText}
        </Button>
        {submitted ? 
          <span className="text-success-600">
            Message sent!
          </span>
        : null}
      </div>
    </Form>
  )
}
