import type { SurveySection } from "../types/survey";

export const ratingOptions = [
  { value: "very-poor", label: "سيء" },
  { value: "poor", label: "ضعيف" },
  { value: "fair", label: "مقبول" },
  { value: "good", label: "جيد" },
  { value: "very-good", label: "جيد جداً" },
];

export const yesNoOptions = [
  { value: "yes", label: "نعم" },
  { value: "no", label: "لا" },
];

export const waitingDurationOptions = [
  { value: "0-10", label: "من 0 إلى 10 دقائق" },
  { value: "10-20", label: "من 10 إلى 20 دقيقة" },
  { value: "20-30", label: "من 20 إلى 30 دقيقة" },
  { value: "30-40", label: "من 30 إلى 40 دقيقة" },
  { value: "more-than-40", label: "أكثر من 40 دقيقة" },
];

export const lowRatingValues = ["very-poor", "poor"];

export function getWaitingDurationAnswerId(questionId: string) {
  return `${questionId}_waiting_duration`;
}

export function shouldShowWaitingDuration(answerValue?: string) {
  return Boolean(answerValue && lowRatingValues.includes(answerValue));
}

export const surveySections: SurveySection[] = [
  {
    id: "basic",
    title: "أسئلة أساسية",
    subtitle: "تقييم إجراءات التسجيل قبل الدخول للعيادة",
    questions: [
      { id: "registration_helpfulness", text: "مساعدة موظفي التسجيل", type: "rating", required: true },
      { id: "registration_ease", text: "سهولة إجراءات التسجيل", type: "rating", required: true },
      { id: "registration_waiting", text: "فترة الانتظار للتسجيل", type: "rating", required: true, waitingDurationOnLowRating: true },
    ],
  },
  {
    id: "facility",
    title: "المرافق",
    subtitle: "تقييم بيئة العيادة وسهولة الوصول إليها",
    questions: [
      { id: "waiting_area_comfort", text: "راحة منطقة الانتظار", type: "rating", required: true },
      { id: "clinic_finding_ease", text: "سهولة الوصول إلى العيادة", type: "rating", required: true },
      { id: "clinic_cleanliness", text: "نظافة العيادة", type: "rating", required: true },
      { id: "clinic_privacy", text: "مستوى الخصوصية في العيادة", type: "rating", required: true },
    ],
  },
  {
    id: "physician",
    title: "الطبيب / الطبيبة",
    subtitle: "تقييم التعامل والشرح والخصوصية أثناء الفحص",
    questions: [
      { id: "physician_courtesy", text: "لطف واحترام الطبيب / الطبيبة", type: "rating", required: true },
      { id: "physician_time", text: "الوقت الذي قضاه الطبيب / الطبيبة معكِ", type: "rating", required: true },
      { id: "physician_attention", text: "الاهتمام بأسئلتكِ ومخاوفكِ", type: "rating", required: true },
      { id: "physician_explanation", text: "وضوح شرح حالتكِ الصحية", type: "rating", required: true },
      { id: "physician_involvement", text: "إشراككِ في اتخاذ القرارات المتعلقة برعايتكِ", type: "rating", required: true },
      { id: "physician_privacy_exam", text: "احترام خصوصيتكِ أثناء الفحص", type: "rating", required: true },
      { id: "physician_ultrasound_explanation", text: "قام الطبيب / الطبيبة بشرح نتائج السونار بطريقة واضحة وسهلة الفهم", type: "rating", required: true },
    ],
  },
  {
    id: "laboratory",
    title: "المختبر",
    subtitle: "هذا القسم يظهر حسب تلقي الخدمة من المختبر",
    questions: [
      { id: "lab_received", text: "هل تلقيتِ خدمات من المختبر؟", type: "yesNo", required: true },
      { id: "lab_comfort", text: "الحرص على راحتكِ خلال عملية سحب عينة الدم", type: "rating", required: true, showIf: { questionId: "lab_received", equals: "yes" } },
    ],
  },
  {
    id: "radiology",
    title: "الأشعة والتصوير الطبي",
    subtitle: "السونار / الإيكو / التصوير الطبي",
    questions: [
      { id: "radiology_received", text: "هل تلقيتِ خدمات من قسم الأشعة والتصوير الطبي؟", type: "yesNo", required: true },
      { id: "radiology_waiting", text: "فترة الانتظار لإجراء الفحص", type: "rating", required: true, waitingDurationOnLowRating: true, showIf: { questionId: "radiology_received", equals: "yes" } },
      { id: "radiology_comfort", text: "مدى راحتكِ أثناء الفحص أو الإجراء", type: "rating", required: true, showIf: { questionId: "radiology_received", equals: "yes" } },
    ],
  },
  {
    id: "womens_health",
    title: "تجربة الرعاية النسائية والتوليدية",
    subtitle: "تقييم الرعاية المقدمة وملاءمتها لاحتياجاتكِ",
    questions: [
      { id: "sensitive_discussion_comfort", text: "مدى شعوركِ بالراحة عند مناقشة الأمور الصحية الشخصية أو الحساسة", type: "rating", required: true },
      { id: "staff_sensitivity", text: "مراعاة الطاقم الطبي لاحتياجاتكِ الجسدية والنفسية", type: "rating", required: true },
      { id: "pregnancy_care_info", text: "المعلومات المقدمة حول متابعة الحمل إن وجد", type: "rating", required: true },
      { id: "prenatal_postnatal_info", text: "المعلومات المقدمة حول رعاية ما قبل أو ما بعد الولادة إن وجد", type: "rating", required: true },
      { id: "clinic_confidence", text: "مدى ثقتكِ بالرعاية المقدمة في العيادة", type: "rating", required: true },
    ],
  },
  {
    id: "pharmacy",
    title: "الصيدلية",
    subtitle: "هذا القسم يظهر حسب صرف الأدوية من صيدلية المستشفى",
    questions: [
      { id: "pharmacy_received", text: "هل صرفتِ أدويتكِ من صيدلية المستشفى؟", type: "yesNo", required: true },
      { id: "pharmacy_waiting", text: "مدة الانتظار لصرف الأدوية", type: "rating", required: true, waitingDurationOnLowRating: true, showIf: { questionId: "pharmacy_received", equals: "yes" } },
      { id: "pharmacy_explanation", text: "شرح الصيدلي لتعليمات استخدام الأدوية", type: "rating", required: true, showIf: { questionId: "pharmacy_received", equals: "yes" } },
      { id: "pharmacy_availability", text: "توفر الأدوية الموصوفة", type: "rating", required: true, showIf: { questionId: "pharmacy_received", equals: "yes" } },
    ],
  },
  {
    id: "personal_issues",
    title: "أمور شخصية",
    subtitle: "تقييم الخصوصية والاستجابة للاحتياجات والملاحظات",
    questions: [
      { id: "privacy_concern", text: "مراعاة خصوصيتكِ", type: "rating", required: true },
      { id: "needs_sensitivity", text: "الاستجابة لاحتياجاتكِ", type: "rating", required: true },
      { id: "complaints_response", text: "الاستجابة للشكاوى أو الملاحظات", type: "rating", required: true },
    ],
  },
  {
    id: "overall",
    title: "التقييم العام",
    subtitle: "تقييمكِ النهائي لتجربة الرعاية في عيادة النسائية والتوليد",
    questions: [
      { id: "staff_compassion", text: "مدى تعامل الموظفين معكِ بإنسانية", type: "rating", required: true },
      { id: "staff_teamwork", text: "مدى تعاون الموظفين في تقديم الرعاية لكِ", type: "rating", required: true },
      { id: "overall_care_rating", text: "التقييم العام للرعاية المقدمة", type: "rating", required: true },
      { id: "return_likelihood", text: "احتمالية العودة إلى هذه العيادة مستقبلاً", type: "yesNo", required: true },
      { id: "recommend_likelihood", text: "احتمالية أن توصي بعيادة النسائية والتوليد للآخرين", type: "rating", required: true },
      { id: "comments", text: "تعليقات: صفي التجارب الجيدة أو السيئة", type: "textarea", required: false },
    ],
  },
];
