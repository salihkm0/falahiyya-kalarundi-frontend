import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  FileText,
  Clock,
  MapPin,
  AlertCircle,
  ChevronRight,
  Phone,
  Users,
  Info,
  CheckCircle2,
} from "lucide-react";
import ScrollToTop from "../ScrollToTop";

const AdmissionLanding = () => {
  ScrollToTop();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pb-12">
      {/* Header Banner */}
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

      <div className="max-w-5xl mx-auto px-4">
        {/* Important Notice Card */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg mb-8">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1 mr-3" />
            <div>
              <h2 className="text-xl font-bold text-amber-800 mb-2">
                ശ്രദ്ധിക്കുക
              </h2>
              <p className="text-amber-900">
                വിദ്യാർത്ഥിയുടെ രജിസ്‌ട്രേഷൻ സംബന്ധമായ എല്ലാ വിവരങ്ങളും
                കൃത്യമായി, പൂർണ്ണമായി, ശുദ്ധിയായി പൂരിപ്പിക്കേണ്ടതാണ്.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Instructions Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-600 px-6 py-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <Info className="w-6 h-6 mr-2" />
                  നിർദ്ദേശങ്ങൾ
                </h2>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {[
                    "* അടയാളപ്പെടുത്തിയ വിവരങ്ങൾ നിർബന്ധമായും പൂരിപ്പിക്കേണ്ടതാണ്.",
                    "ആവശ്യമായ വിവരങ്ങൾ ഇംഗ്ലീഷിലോ മലയാളത്തിലോ എഴുതി നൽകാവുന്നതാണ്.",
                    "വിദ്യാർത്ഥിയുടെ പേര്, രക്ഷിതാവിന്റെ പേര് എന്നിവ നിർബന്ധമായും ഇംഗ്ലീഷിൽ എഴുതുക.",
                  ].map((instruction, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1 mr-3" />
                      <span className="text-gray-700">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Required Documents Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-indigo-600 px-6 py-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <FileText className="w-6 h-6 mr-2" />
                  ആവശ്യമായ രേഖകൾ
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  വിദ്യാർത്ഥിയുടെ രേഖകൾ പരിശോധിക്കേണ്ടതിനാൽ താഴെ പറയുന്ന
                  മൂലരേഖകൾ നിർബന്ധമായും കൈവശം കരുതണം:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start bg-indigo-50 p-4 rounded-lg">
                    <ChevronRight className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1 mr-3" />
                    <div>
                      <span className="font-semibold text-indigo-900">
                        ജനന സർട്ടിഫിക്കറ്റ്
                      </span>
                      <p className="text-indigo-700 text-sm mt-1">
                        വിദ്യാർത്ഥിയുടെ ജനന തീയതി സ്ഥിരീകരിക്കാൻ
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start bg-indigo-50 p-4 rounded-lg">
                    <ChevronRight className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1 mr-3" />
                    <div>
                      <span className="font-semibold text-indigo-900">
                        ആധാർ കാർഡ്
                      </span>
                      <p className="text-indigo-700 text-sm mt-1">
                        തിരിച്ചറിയൽ അർഹത തെളിയിക്കാൻ
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Schedule Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-green-600 px-6 py-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <Calendar className="w-6 h-6 mr-2" />
                  ഹാജരാകേണ്ട വിവരങ്ങൾ
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-green-600 flex-shrink-0 mt-1 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-700">തിയതി</p>
                      <p className="text-gray-600">
                        2025 മാർച്ച് 26 (ബുധനാഴ്ച)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-green-600 flex-shrink-0 mt-1 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-700">സമയം</p>
                      <p className="text-gray-600">
                        രാവിലെ 9:00 മുതൽ 11:00 വരെ
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-700">സ്ഥലം</p>
                      <p className="text-gray-600">
                        AL Madrassathul Falahiyya Kalarundi
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-green-600 flex-shrink-0 mt-1 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-700">
                        കൂടെ വരേണ്ടവർ
                      </p>
                      <p className="text-gray-600">
                        രക്ഷിതാവ് അല്ലെങ്കിൽ നിയമാനുസൃത പരിപാലകൻ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-purple-600 px-6 py-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <Phone className="w-6 h-6 mr-2" />
                  കൂടുതൽ വിവരങ്ങൾക്ക്
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  കൂടുതൽ വിവരങ്ങൾക്ക്, മദ്രസാ ഓഫീസ് / ബന്ധപ്പെട്ട അധ്യാപകരെ
                  ബന്ധപ്പെടുക.
                </p>
                <p className="text-gray-700 mb-4">
                  Contact : <span className="font-[600]">9946801189</span>
                </p>
              </div>
            </div>

            {/* Warning Message */}
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700 font-medium text-center">
                ദയവായി സമയബന്ധിതമായി മദ്രസയിൽ ഹാജരാകുക. വൈകിയെത്തുന്നവർക്ക്
                പ്രവേശനം അനുവദിക്കുകയില്ല.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/admission-form")}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold px-12 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            അഡ്മിഷൻ ഫോമിലേക്ക് പോകുക →
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionLanding;
