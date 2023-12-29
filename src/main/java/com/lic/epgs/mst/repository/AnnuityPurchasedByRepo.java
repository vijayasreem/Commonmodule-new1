package com.lic.epgs.mst.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lic.epgs.mst.entity.AnnuityPurchasedBy;

@Repository
public interface AnnuityPurchasedByRepo extends JpaRepository<AnnuityPurchasedBy, Long> {

	Optional<AnnuityPurchasedBy> findByAnnuityCode(String annCode);
         
}
