export interface OrgLocation {
    loc: string;
    address: string;
    loc_contact: number;
    loc_email: string;
    admin_id: string;
    _id: string;
  }
  
  export interface Organization {
    _id: string;
    org_name: string;
    org_location: OrgLocation[];
    org_created_at: string;
    org_updated_at: string;
    isActive: boolean;
    __v: number;
  }
  
  export interface OrganizationsResponse {
    statuscode: number;
    data: Organization[];
  }