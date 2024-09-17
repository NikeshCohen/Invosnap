type PayeeFields =
  | "payeeName"
  | "payeeAddress"
  | "payeeZip"
  | "payeeCity"
  | "payeeCountry"
  | "payeeEmail"
  | "payeePhone";
type PayorFields =
  | "payorName"
  | "payorAddress"
  | "payorZip"
  | "payorCity"
  | "payorCountry"
  | "payorEmail"
  | "payorPhone";

export type Field = {
  id: PayeeFields | PayorFields;
  label: string;
};
