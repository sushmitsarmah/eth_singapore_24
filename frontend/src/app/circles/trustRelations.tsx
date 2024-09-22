/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';

interface TrustRelationsProps {
  avatarInfo: {
    getTrustRelations: (arg: string) => Promise<any>;
  };
  setTrustedCircles: React.Dispatch<React.SetStateAction<any[]>>;
  setTrustRelations: React.Dispatch<React.SetStateAction<any[]>>;
}

const TrustRelations: React.FC<TrustRelationsProps> = ({
  avatarInfo,
  setTrustedCircles,
  setTrustRelations,
}) => {
  useEffect(() => {
    const trustRelationsHandle = async () => {
      try {
        const trustRelations = await avatarInfo.getTrustRelations("");
        const trustedCircles = trustRelations.map((rel: any) => rel.objectAvatar);
        const mappedRelations = trustRelations.map((rel: any) => ({
          timestamp: rel.timestamp,
          objectAvatar: rel.objectAvatar,
          relations: rel.relation,
        }));

        setTrustedCircles(trustedCircles);
        setTrustRelations(mappedRelations);
      } catch (error) {
        console.error("Error processing trust relations:", error);
      }
    };

    if (avatarInfo) {
      trustRelationsHandle();
    }
  }, [avatarInfo, setTrustedCircles, setTrustRelations]);

  return null;
};

export default TrustRelations;
