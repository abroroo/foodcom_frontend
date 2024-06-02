export interface ContactFieldsConfigType {
  id: string
  icon: string
  placeholder: string
  label: string
}
export interface IContactConfig {
  title: string
  name: ContactFieldsConfigType
  phone: ContactFieldsConfigType
  note: ContactFieldsConfigType
}

export const contactConfig: IContactConfig = {
  title: "연락처 정보를 입력하십시오",
  name: {
    id: "name",
    icon: "/images/icons/name.png",
    placeholder: "직접 입력해 주세요",
    label: "이름을 입력해주세요",
  },
  phone: {
    id: "phone",
    icon: "/images/icons/phone.png",
    placeholder: "- 없이 숫자만 직접 입력해 주세요",
    label: "11개의 숫자만 입력하십시오",
  },
  note: {
    id: "message",
    icon: "/images/icons/note.png",
    placeholder: "요청 사항",
    label: "요청 사항",
  },
}
