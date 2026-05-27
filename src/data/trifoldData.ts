export interface TrifoldDialogue {
  they_es: string
  they_en: string
  you_es: string
  you_en: string
}

export interface TrifoldData {
  id: string
  dialogues: TrifoldDialogue[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function adapt(raw: any): TrifoldData {
  return {
    id: raw.id ?? '',
    dialogues: Array.isArray(raw.dialogues) ? raw.dialogues : [],
  }
}

// Medical
import emergencyRaw from './trifold/medical/emergency.json'
import nursingRaw from './trifold/medical/nursing.json'
import orthopedicsRaw from './trifold/medical/orthopedics.json'
import familyMedicineRaw from './trifold/medical/family-medicine.json'
import obgynRaw from './trifold/medical/obgyn.json'
import surgeryRaw from './trifold/medical/surgery.json'
import cardiologyRaw from './trifold/medical/cardiology.json'
import physicalTherapyRaw from './trifold/medical/physical-therapy.json'
import painManagementRaw from './trifold/medical/pain-management.json'
import medicalReceptionistRaw from './trifold/medical/medical-receptionist.json'
import socialWorkRaw from './trifold/medical/social-work.json'
import orEvsRaw from './trifold/medical/or-evs.json'
import fmgRaw from './trifold/medical/fmg.json'

// Construction
import framerRaw from './trifold/construction/framer.json'
import foremanRaw from './trifold/construction/foreman.json'
import safetyRaw from './trifold/construction/safety.json'
import drywallRaw from './trifold/construction/drywall.json'
import plumberRaw from './trifold/construction/plumber.json'
import electricianRaw from './trifold/construction/electrician.json'
import truckDriverRaw from './trifold/construction/truck-driver.json'
import landscaperRaw from './trifold/construction/landscaper.json'
import autoMechanicRaw from './trifold/construction/auto-mechanic.json'

export const MEDICAL_TRIFOLDS: Record<string, TrifoldData> = Object.fromEntries(
  [emergencyRaw, nursingRaw, orthopedicsRaw, familyMedicineRaw, obgynRaw,
   surgeryRaw, cardiologyRaw, physicalTherapyRaw, painManagementRaw,
   medicalReceptionistRaw, socialWorkRaw, orEvsRaw, fmgRaw].map(r => [r.id, adapt(r)])
)

export const CONSTRUCTION_TRIFOLDS: Record<string, TrifoldData> = Object.fromEntries(
  [framerRaw, foremanRaw, safetyRaw, drywallRaw, plumberRaw,
   electricianRaw, truckDriverRaw, landscaperRaw, autoMechanicRaw].map(r => [r.id, adapt(r)])
)
