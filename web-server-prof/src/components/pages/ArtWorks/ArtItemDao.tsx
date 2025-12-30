/******************************************************************************
 * ArtItemDao.tsx
 *****************************************************************************/
export interface ArtItemDao {
  src: string;
  name: string;
  size?: string;        // JSON にない項目は optional にしておくと安全
  date?: string;
  description?: string;
}
