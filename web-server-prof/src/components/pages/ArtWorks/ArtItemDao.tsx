/******************************************************************************
 * ArtItemDao.tsx
 *****************************************************************************/
export interface ArtItemDao {
  src: string;
  modal_src: string;
  detail_info_json?:string;
  name: string;
  size: string;       
  date: string;
  description?: string;
}
