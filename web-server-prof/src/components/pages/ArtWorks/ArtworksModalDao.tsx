/******************************************************************************
 * ArtworksModalDao.tsx
 *****************************************************************************/
import React, { ReactNode} from "react";

export interface ArtworksModalDao {
  isOpen: boolean;               // モーダル表示フラグ
  onClose: () => void;           // 閉じる処理
  name: string;
  cdno: string;
  children: ReactNode;
}