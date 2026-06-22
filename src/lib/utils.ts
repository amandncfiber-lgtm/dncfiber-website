import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const COMPANY = {
  name: 'Drop Network Connective',
  tagline: 'End-to-End FTTX Design & Engineering Solutions',
  phone: '+91 73899 73218',
  email: 'aman.dncfiber@gmail.com',
  website: 'dncfiber.com',
  location: 'Raipur, Chhattisgarh, India',
  linkedin: 'https://linkedin.com/company/drop-network-connective',
  whatsapp: 'https://wa.me/917389973218',
} as const

export const SERVICES = [
  {
    id: 'hld',
    title: 'High Level Design (HLD)',
    short: 'Network architecture and routing strategy for greenfield and brownfield deployments.',
    features: ['Network Architecture', 'Fiber Routing Strategy', 'Capacity Planning', 'Cost Estimation', 'Expansion Planning'],
    icon: 'Network',
  },
  {
    id: 'lld',
    title: 'Low Level Design (LLD)',
    short: 'Detailed construction-ready fiber designs with full splicing and allocation documentation.',
    features: ['Detailed Fiber Routes', 'Splice Planning', 'Fiber Allocation Tables', 'Network Documentation', 'Construction Packages'],
    icon: 'Layers',
  },
  {
    id: 'construction',
    title: 'Construction Drawings',
    short: 'Permit-ready CAD packages for municipal submissions and contractor execution.',
    features: ['Permit Drawings', 'Traffic Control Plans', 'Utility Coordination', 'As-Built Drawings', 'Engineering Packages'],
    icon: 'FileText',
  },
  {
    id: 'gis',
    title: 'GIS Mapping',
    short: 'Geospatial fiber route mapping, spatial analysis and GIS data management.',
    features: ['Route Mapping', 'Spatial Analysis', 'Data Management', 'Feature Extraction', 'Attribute Tables'],
    icon: 'Map',
  },
  {
    id: 'arcgis',
    title: 'ArcGIS Support',
    short: 'Full ArcGIS Pro / ArcMap workflow support for telecom network datasets.',
    features: ['ArcGIS Pro', 'ArcMap', 'Network Datasets', 'Geodatabases', 'Esri Standards'],
    icon: 'Globe',
  },
  {
    id: 'qgis',
    title: 'QGIS Services',
    short: 'Open-source GIS workflows for fiber mapping, analysis and documentation.',
    features: ['QGIS 3.x', 'Plugin Workflows', 'Raster Analysis', 'Vector Editing', 'Export Packages'],
    icon: 'Globe2',
  },
  {
    id: 'planning',
    title: 'Fiber Network Planning',
    short: 'End-to-end FTTH, FTTB and FTTC network planning for greenfield and brownfield sites.',
    features: ['Greenfield Networks', 'Brownfield Upgrades', 'FTTH / FTTB / FTTC', 'Enterprise Fiber', 'Capacity Models'],
    icon: 'Workflow',
  },
  {
    id: 'splice',
    title: 'Splice Sheet Preparation',
    short: 'Accurate fiber splice schedules, color-coded allocation charts and OTDR references.',
    features: ['Splice Schedules', 'Color Code Charts', 'Fusion Records', 'OTDR References', 'Tray Assignments'],
    icon: 'Cable',
  },
  {
    id: 'permitting',
    title: 'Permitting Support',
    short: 'Municipality coordination, utility crossings and complete permit documentation packages.',
    features: ['Municipal Coordination', 'Utility Crossings', 'Permit Documentation', 'Regulatory Compliance', 'Agency Submissions'],
    icon: 'Shield',
  },
  {
    id: 'documentation',
    title: 'Telecom Documentation',
    short: 'Professional network documentation, reports and engineering deliverables.',
    features: ['Network Reports', 'Design Packages', 'As-Built Records', 'BOQ Preparation', 'Project Documentation'],
    icon: 'BookOpen',
  },
  {
    id: 'utility',
    title: 'Utility Coordination',
    short: 'Conflict analysis, utility locate support and crossing design for buried and aerial fiber.',
    features: ['Conflict Analysis', 'Utility Locates', 'Crossing Designs', 'Clearance Calculations', 'Agency Notifications'],
    icon: 'Zap',
  },
  {
    id: 'osp',
    title: 'OSP Design Support',
    short: 'Outside Plant design for aerial, underground and direct-buried fiber deployments.',
    features: ['Aerial Design', 'Underground Design', 'Direct Bury', 'Conduit Systems', 'Vault & Handhole Placement'],
    icon: 'Cable',
  },
] as const

export const WORKFLOW_STEPS = [
  { step: '01', label: 'Client Requirement', desc: 'Scope, standards and deliverable review' },
  { step: '02', label: 'Survey & Data Collection', desc: 'Field data, GIS imagery and existing network review' },
  { step: '03', label: 'Network Planning', desc: 'Coverage strategy and route optimization' },
  { step: '04', label: 'HLD Development', desc: 'Architecture, routing and capacity design' },
  { step: '05', label: 'GIS Design', desc: 'Geospatial mapping and spatial analysis' },
  { step: '06', label: 'LLD Development', desc: 'Detailed fiber routes and splice allocation' },
  { step: '07', label: 'Splice Sheets', desc: 'Fiber color codes, tray assignments and schedules' },
  { step: '08', label: 'Construction Drawings', desc: 'CAD permit packages for field execution' },
  { step: '09', label: 'Permitting Support', desc: 'Municipal and utility coordination' },
  { step: '10', label: 'Final Delivery', desc: 'QA review and deliverable handover' },
] as const

export const FIBER_COLORS = [
  { id: 1, name: 'Blue',   hex: '#1155CC', light: '#4A90D9' },
  { id: 2, name: 'Orange', hex: '#E67300', light: '#F5A623' },
  { id: 3, name: 'Green',  hex: '#0A7A0A', light: '#27AE60' },
  { id: 4, name: 'Brown',  hex: '#7B4512', light: '#A0522D' },
  { id: 5, name: 'Slate',  hex: '#5C6B7A', light: '#8FA3B1' },
  { id: 6, name: 'White',  hex: '#C8C8C8', light: '#EEEEEE' },
  { id: 7, name: 'Red',    hex: '#CC1111', light: '#E74C3C' },
  { id: 8, name: 'Black',  hex: '#1A1A1A', light: '#444444' },
  { id: 9, name: 'Yellow', hex: '#CCA700', light: '#F1C40F' },
  { id: 10, name: 'Violet', hex: '#6600BB', light: '#9B59B6' },
  { id: 11, name: 'Rose',   hex: '#CC4488', light: '#E91E8C' },
  { id: 12, name: 'Aqua',   hex: '#007799', light: '#00BCD4' },
] as const

export const TECHNOLOGIES = [
  { name: 'ArcGIS Pro', category: 'GIS Platform', desc: 'Esri\'s flagship GIS platform for professional fiber route mapping, spatial analysis and network dataset management.', color: '#0066FF' },
  { name: 'ArcMap', category: 'GIS Platform', desc: 'Legacy Esri desktop GIS used for telecom mapping workflows, geodatabase editing and spatial processing.', color: '#0066FF' },
  { name: 'AutoCAD', category: 'CAD Design', desc: 'Industry-standard CAD software for construction drawings, permit packages and as-built documentation.', color: '#CC3300' },
  { name: 'AutoCAD Map 3D', category: 'CAD + GIS', desc: 'Combined CAD and GIS platform for integrated telecom design, mapping and permit drawing production.', color: '#CC3300' },
  { name: 'QGIS', category: 'Open Source GIS', desc: 'Open-source GIS platform for fiber route mapping, spatial analysis and geospatial data management workflows.', color: '#008800' },
  { name: 'IQGeo', category: 'Telecom OSP', desc: 'Telecom-specific network design platform for OSP fiber management, network records and work order systems.', color: '#6600CC' },
  { name: 'Google Earth Pro', category: 'Aerial Imagery', desc: 'High-resolution aerial imagery integration for route visualization, site planning and client presentation.', color: '#0099CC' },
] as const
