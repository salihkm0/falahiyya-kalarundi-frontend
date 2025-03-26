// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { School, User, Home, FileText, BookOpen } from "lucide-react";
// import toast from "react-hot-toast";
// import axios from "axios";
// const FormSection = ({ title, icon, children }) => (
//   <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
//     <div className="flex items-center gap-2 mb-4 text-green-700">
//       {icon}
//       <h3 className="text-lg font-semibold">{title}</h3>
//     </div>
//     <div className="space-y-4">{children}</div>
//   </div>
// );

// const InputField = ({
//   label,
//   type = "text",
//   register,
//   name,
//   required = true,
// }) => (
//   <div className="w-full">
//     <label className="block text-sm font-medium text-gray-700 mb-1">
//       {label}
//     </label>
//     <input
//       type={type}
//       {...register(name, { required })}
//       className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 ease-in-out"
//     />
//   </div>
// );

// const MadrasaAdmissionForm = () => {
//   const { register, handleSubmit, setValue,reset } = useForm();
//   useEffect(() => {
//     setValue("madrasaName", "AL Madrassathul Falahiyya Kalarundi - 10610");
//   }, [setValue]);
//   const [loading, setLoading] = useState(false);

//   const onSubmit = async (data) => {
//     console.log("Form Data:", data);
//     setLoading(true);
//     try {
//       const res = await axios.post(
//         `https://falahiyya-kalarundi-backend.onrender.com/api/admission`,
//         data
//       );
//       console.log("response: " , res)
//       if (res.status === 201) {
//         toast.success("Application Submitted");
//         setLoading(false);
//         reset()
//         // navigate
//       }
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response.data.message);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="text-center mb-6 sm:mb-8">
//         <h1 className="text-xl sm:text-3xl font-bold text-gray-800 mb-2 uppercase">
//           AL Madrassathul Falahiyya Kalarundi
//         </h1>
//         <h1 className="text-md sm:text-xl font-bold text-gray-800 mb-2">
//           Madrasa Admission Application
//         </h1>
//         <p className="text-gray-600">Academic Year 2025 - 2026</p>
//       </div>

//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="space-y-4 sm:space-y-6"
//       >
//         <fieldset disabled>
//           <FormSection
//             title="Institution Details"
//             icon={<School className="w-5 h-5" />}
//           >
//             <InputField
//               label="Name & Recognition Number of Madrasa"
//               register={register}
//               name="madrasaName"
//               value="AL Madrassathul Falahiyya Kalarundi - 10610"
//             />
//           </FormSection>
//         </fieldset>

//         <FormSection
//           title="Student Information"
//           icon={<User className="w-5 h-5" />}
//         >
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <InputField
//               label="Name of Student with initials (വിദ്യാർഥിയുടെ പേരും ഇനിഷ്യലും)*"
//               register={register}
//               name="studentName"
//             />
//             <InputField
//               label="Aadhaar Number (ആധാർ നമ്പർ)*"
//               register={register}
//               name="aadhaar"
//             />
//             <InputField
//               label="Date of Birth (ജനന തിയതി)*"
//               type="date"
//               register={register}
//               name="dob"
//             />
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Gender*
//               </label>
//               <select
//                 {...register("gender")}
//                 className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 ease-in-out"
//               >
//                 <option value="">Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//               </select>
//             </div>
//           </div>
//         </FormSection>

//         <FormSection
//           title="Contact Information"
//           icon={<Home className="w-5 h-5" />}
//         >
//           <InputField
//             label="House Name & Address (വീട്ടുപേര്, വിലാസം)*"
//             register={register}
//             name="houseAddress"
//           />
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <InputField
//               label="Phone Number"
//               type="tel"
//               register={register}
//               name="phone"
//               required = {false}
//             />
//             <InputField
//               label="Whatsapp Number*"
//               type="tel"
//               register={register}
//               name="whatsapp"
//               required = {true}
//             />
//             <InputField
//               label="Identification Marks (തിരിച്ചറിയാനുള്ള അടയാളങ്ങൾ)"
//               register={register}
//               name="identificationMarks"
//             />
//           </div>
//         </FormSection>

//         <FormSection
//           title="Guardian Details"
//           icon={<FileText className="w-5 h-5" />}
//         >
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <InputField
//               label="Name of Father (പിതാവിന്റെ പേര്)*"
//               register={register}
//               name="fatherName"
//             />
//             <InputField
//               label="Name of Guardian & Address (രക്ഷകർത്താവിന്റെ പേര്, വിലാസം)*"
//               register={register}
//               name="guardianName"
//             />
//             <InputField
//               label="Relation with Student (രക്ഷകർത്താവിന് വിദ്യാർഥിയുമായുള്ള ബന്ധം)*"
//               register={register}
//               name="relation"
//             />
//             <InputField
//               label="Occupation of Guardian (രക്ഷകർത്താവിന്റെ പ്രവൃത്തി)*"
//               register={register}
//               name="guardianOccupation"
//             />
//           </div>
//         </FormSection>

//         <FormSection
//           title="Admission Details"
//           icon={<BookOpen className="w-5 h-5" />}
//         >
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Standard to which admitted (ചേരുന്ന ക്ലാസ്സ്‌‌)*
//               </label>
//               <select
//                 {...register("classAdmitted")}
//                 className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 ease-in-out"
//               >
//                 <option value="">Select Class</option>
//                 {[...Array(7)].map((_, i) => (
//                   <option key={i + 1} value={i + 1}>
//                     {i + 1}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <br />
//             <p className="w-full md:my-2">
//               If you are coming from another madrasa (നിങ്ങൾ മറ്റ് മദ്രസയിൽ
//               നിന്നാണ് വരുന്നതെങ്കിൽ)
//             </p>
//             <br />
//             <InputField
//               label="Name & No. of Former Madrasa (മദ്രസയുടെ പേര്, അംഗീകരണ നമ്പർ)"
//               register={register}
//               name="formerMadrasa"
//               required={false}
//             />
//             <InputField
//               label="T C Number"
//               register={register}
//               name="tcNumber"
//               required={false}
//             />
//             <InputField
//               label="Certificate Number & Class of Public Exam (പൊതുപരീക്ഷ പാസ്സായ ക്ലാസ്സ്‌, സർട്ടിഫിക്കറ്റ് നമ്പർ)"
//               register={register}
//               name="certificateNumber"
//               required={false}
//             />
//           </div>
//         </FormSection>

//         <div className="flex justify-center pt-6">
//           <button
//             type="submit"
//             className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 focus:ring-4 focus:ring-green-200 transition duration-200 ease-in-out transform hover:-translate-y-1"
//           >
//             {loading ? `Submitting...` : `Submit Application`}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default MadrasaAdmissionForm;

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { School, User, Home, FileText, BookOpen } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import ScrollToTop from "../ScrollToTop";

const FormSection = ({ title, icon, children }) => (
  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="flex items-center gap-2 mb-4 text-green-700">
      {icon}
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <div className="space-y-4">{children}</div>
  </div>
);

const InputField = ({
  label,
  type = "text",
  register,
  name,
  required = true,
}) => (
  <div className="w-full">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      {...register(name, { required })}
      className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 ease-in-out"
    />
  </div>
);

const MadrasaAdmissionForm = () => {
  ScrollToTop();
  const { register, handleSubmit, setValue, watch, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [sameAsPhone, setSameAsPhone] = useState(false);

  useEffect(() => {
    setValue("madrasaName", "AL Madrassathul Falahiyya Kalarundi - 10610");
  }, [setValue]);

  const phoneNumber = watch("phone");
  const selectedClass = watch("classAdmitted");

  useEffect(() => {
    if (sameAsPhone) {
      setValue("whatsapp", phoneNumber);
    }
  }, [sameAsPhone, phoneNumber, setValue]);

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    setLoading(true);
    try {
      const res = await axios.post(
        `https://falahiyya-kalarundi-backend.onrender.com/api/admission`,
        data
      );
      console.log("response: ", res);
      if (res.status === 201) {
        toast.success("Application Submitted");
        setLoading(false);
        reset();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Submission failed");
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-8 px-4 mb-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2 uppercase">
            AL Madrassathul Falahiyya Kalarundi
          </h1>
          <div className="text-lg sm:text-xl opacity-90 mb-2">
            Madrasa Admission Application
          </div>
          <div className="text-sm sm:text-base opacity-80">
            Academic Year 2025 - 2026
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 sm:space-y-6 px-1"
      >
        <fieldset disabled>
          <FormSection
            title="Institution Details"
            icon={<School className="w-5 h-5" />}
          >
            <InputField
              label="Name & Recognition Number of Madrasa"
              register={register}
              name="madrasaName"
            />
          </FormSection>
        </fieldset>

        <FormSection
          title="Student Information"
          icon={<User className="w-5 h-5" />}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField
              label="Name of Student with initials (വിദ്യാർഥിയുടെ പേരും ഇനിഷ്യലും)*"
              register={register}
              name="studentName"
            />
            <InputField
              label="Aadhaar Number (ആധാർ നമ്പർ)"
              register={register}
              name="aadhaar"
              required={false}
            />
            <InputField
              label="Date of Birth (ജനന തിയതി)*"
              type="date"
              register={register}
              name="dob"
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender*
              </label>
              <select
                {...register("gender")}
                className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 ease-in-out"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
        </FormSection>

        <FormSection
          title="Contact Information"
          icon={<Home className="w-5 h-5" />}
        >
          <InputField
            label="House Name & Address (വീട്ടുപേര്, വിലാസം)*"
            register={register}
            name="houseAddress"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField
              label="Phone Number"
              type="tel"
              register={register}
              name="phone"
              required={false}
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="sameAsPhone"
                checked={sameAsPhone}
                onChange={() => setSameAsPhone(!sameAsPhone)}
              />
              <label htmlFor="sameAsPhone" className="text-sm text-gray-700">
                Same as Phone Number (വാട്ട്‌സ്ആപ്പ് നമ്പറും ഫോൺ നമ്പറും
                ഒന്നുതന്നെയാണ്)
              </label>
            </div>
            <InputField
              label="Whatsapp Number*"
              type="tel"
              register={register}
              name="whatsapp"
              required
            />
          </div>
          <InputField
            label="Identification Marks (തിരിച്ചറിയാനുള്ള അടയാളങ്ങൾ)"
            register={register}
            name="identificationMarks"
          />
        </FormSection>

        <FormSection
          title="Guardian Details"
          icon={<FileText className="w-5 h-5" />}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField
              label="Name of Father (പിതാവിന്റെ പേര്)*"
              register={register}
              name="fatherName"
            />
            <InputField
              label="Name of Guardian & Address (രക്ഷകർത്താവിന്റെ പേര്, വിലാസം)*"
              register={register}
              name="guardianName"
            />
            <InputField
              label="Relation with Student (രക്ഷകർത്താവിന് വിദ്യാർഥിയുമായുള്ള ബന്ധം)*"
              register={register}
              name="relation"
            />
            <InputField
              label="Occupation of Guardian (രക്ഷകർത്താവിന്റെ പ്രവൃത്തി)*"
              register={register}
              name="guardianOccupation"
            />
          </div>
        </FormSection>

        <FormSection
          title="Admission Details"
          icon={<BookOpen className="w-5 h-5" />}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Standard to which admitted (ചേരുന്ന ക്ലാസ്സ്‌‌)*
              </label>
              <select
                {...register("classAdmitted")}
                className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 ease-in-out"
              >
                <option value="">Select Class</option>
                {[...Array(7)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {selectedClass >= 2 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* <h4 className="text-md font-semibold text-gray-800">If you are coming from another madrasa</h4> */}
              <InputField
                label="Name & No. of Former Madrasa (മദ്രസയുടെ പേര്, അംഗീകരണ നമ്പർ)"
                register={register}
                name="formerMadrasa"
                required={false}
              />
              <InputField
                label="T C Number"
                register={register}
                name="tcNumber"
                required={false}
                sx={{}}
              />
            </div>
          )}
          {selectedClass >= 5 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="Certificate Number & Class (പൊതുപരീക്ഷ പാസ്സായ ക്ലാസ്സ്‌, സർട്ടിഫിക്കറ്റ് നമ്പർ)"
                register={register}
                name="certificateNumber"
                required={false}
              />
            </div>
          )}
        </FormSection>
        <div className="flex justify-center pt-6">
          <button
            type="submit"
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MadrasaAdmissionForm;
