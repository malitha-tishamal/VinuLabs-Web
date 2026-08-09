export type SubmenuItem = {
    label: string;
    href: string;
    key?: string;
  };    
  
  export type HeaderItem = {
    label: string;
    href: string;
    key?: string;
    submenu?: SubmenuItem[];
  };