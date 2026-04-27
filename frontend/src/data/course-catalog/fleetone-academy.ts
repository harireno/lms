import type { Course, CurriculumSection } from "@/types/course.types";
import { flattenCurriculum } from "./utils";

const fleetoneCurriculumSeed = [
  ["fleetone_base", "Core Foundation", "Foundational setup, core references, and system framework."],
  ["fleetone_security", "Core Foundation", "Users, roles, permissions, and access control."],
  ["fleetone_vendor", "Core Foundation", "Vendor master and supplier operations."],
  ["fleetone_cost", "Core Foundation", "Fleet operating cost structures."],
  ["fleetone_vehicle", "Core Foundation", "Vehicle master and unit operations."],
  ["fleetone_component", "Master Assets & Driver Management", "Vehicle component lifecycle."],
  ["fleetone_driver", "Master Assets & Driver Management", "Driver operations and assignments."],
  ["fleetone_license_cert", "Master Assets & Driver Management", "Driver certification management."],
  ["fleetone_license", "Master Assets & Driver Management", "Vehicle license administration."],
  ["fleetone_documents", "Master Assets & Driver Management", "Document control and expirations."],
  ["fleetone_tracker", "Tracking & Metering", "Tracking and unit movement."],
  ["fleetone_meter", "Tracking & Metering", "Meter operations and readings."],
  ["fleetone_inventory", "Inventory & Logistics", "Parts inventory."],
  ["fleetone_fluid", "Inventory & Logistics", "Fluid management."],
  ["fleetone_fuel", "Inventory & Logistics", "Fuel operations."],
  ["fleetone_transfer", "Inventory & Logistics", "Inventory transfers."],
  ["fleetone_supplies", "Inventory & Logistics", "Supplies issuance."],
  ["fleetone_purchase", "Inventory & Logistics", "Purchasing workflow."],
  ["fleetone_tire", "Inventory & Logistics", "Tire lifecycle management."],
  ["fleetone_pm", "Maintenance & Workshop", "Preventive maintenance."],
  ["fleetone_tickler", "Maintenance & Workshop", "Inspection findings."],
  ["fleetone_repair", "Maintenance & Workshop", "Repair operations."],
  ["fleetone_workshop", "Maintenance & Workshop", "Workshop management."],
  ["fleetone_maintenance_history", "Maintenance & Workshop", "Maintenance history."],
  ["fleetone_recall", "Maintenance & Workshop", "Recall campaigns."],
  ["fleetone_assignment", "Operations", "Vehicle assignments."],
  ["fleetone_trip", "Operations", "Trip operations."],
  ["fleetone_payroll_time", "HR & Support Assets", "Time and productivity."],
  ["fleetone_violation", "HR & Support Assets", "Driver violations."],
  ["fleetone_tool_inventory", "HR & Support Assets", "Tool inventory."],
  ["fleetone_tool", "HR & Support Assets", "Tool assignment."],
  ["fleetone_contract", "Governance & Risk", "Contracts."],
  ["fleetone_insurance", "Governance & Risk", "Insurance."],
  ["fleetone_compliance", "Governance & Risk", "Compliance management."],
  ["fleetone_alerts", "Monitoring & Intelligence", "Alerts and notifications."],
  ["fleetone_reporting", "Monitoring & Intelligence", "Operational reporting."],
  ["fleetone_dashboard", "Monitoring & Intelligence", "Fleet KPIs."],
  ["fleetone_integration", "Monitoring & Intelligence", "External integrations."],
  ["fleetone_mobile", "Monitoring & Intelligence", "Mobile operations."],
  ["fleetone_ai_predictive", "Monitoring & Intelligence", "Predictive intelligence."],
] as const;

const fleetoneCurriculum: CurriculumSection[] = fleetoneCurriculumSeed.map(
  ([title, phase, description], index) => ({
    id: `fleetone-sec-${index + 1}`,
    title,
    summary: `${phase}. ${description}`,
    order: index + 1,
    lessons: [],
  })
);


export const fleetoneAcademyCourse: Course = {
  id: "4",
  slug: "fleetone-academy",
  title: "FleetOne Academy",
  price: null,
  accessType: "free",
  level: "Beginner",
  totalDuration: "40 Sections",
  shortDescription: "Operate FleetOne module-by-module while the platform is being built.",
  description:
    "Operate FleetOne module-by-module while the platform is being built.",
  curriculum: fleetoneCurriculum,
  lessons: flattenCurriculum(fleetoneCurriculum),
};
