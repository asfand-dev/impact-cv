
export type ThemeType = 'basic' | 'casual' | 'professional' | 'creative' | 'modern' | 'business' | 
  'minimal' | 'elegant' | 'technical' | 'vibrant' | 'academic' | 'corporate' | 'artistic' | 'classic' |
  'digital' | 'futuristic' | 'nordic' | 'blueprint' | 'gradient' | 'retro';

export interface BasicInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  website?: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  photo?: string; // Base64 string for the uploaded photo
}

export interface Summary {
  content: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  achievements: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institute: string;
  location: string;
  startDate: string;
  endDate: string;
  current?: boolean;
}

export interface SkillItem {
  id: string;
  title: string;
  details: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  company: string;
  details: string[];
}

export interface CVData {
  basicInfo: BasicInfo;
  summary: Summary;
  experiences: ExperienceItem[];
  education: EducationItem[];
  skills: SkillItem[];
  projects: ProjectItem[];
  activeTheme: ThemeType;
  sectionConfig: SectionConfig;
}

export interface SectionConfig {
  visibility: SectionVisibility;
  titles: SectionTitles;
  order: SectionOrder[];
}

export interface SectionVisibility {
  basicInfo: boolean;
  summary: boolean;
  experiences: boolean;
  education: boolean;
  skills: boolean;
  projects: boolean;
  [key: string]: boolean;
}

export interface SectionTitles {
  summary: string;
  experiences: string;
  education: string;
  skills: string;
  projects: string;
  [key: string]: string;
}

export type SectionOrder = 'summary' | 'experiences' | 'education' | 'skills' | 'projects' | string;

export interface CVConfig {
  theme: ThemeType;
  sections: SectionConfig;
}

export interface ThemeConfig {
  id: ThemeType;
  name: string;
  color: string;
  fontClass: string;
  spacing: string;
  headerStyle: string;
  sectionTitleStyle: string;
  sectionContentStyle: string;
  backgroundClass?: string;
  cardStyle?: string;
  borderStyle?: string;
  imagePlacement?: 'left' | 'right' | 'center' | 'top';
  imageStyle?: string;
  preview?: string; // Base64 or URL for theme preview image
}

export interface TailorCVRequest {
  jobTitle: string;
  jobDescription: string;
  cvData: CVData;
}
