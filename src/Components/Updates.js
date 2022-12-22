import React, { useEffect, useState } from "react";
import UpdatesCard from "./UpdatesCard";
import http from "../utils/http-common";
import LoadingSpinner from "../Components/LoadingSpinner";
import lang from "../utils/Language";
import { isRoleAllowed } from "../utils/isRoleAllowed";

import SubModal from "./SubModal";

const Updates = (props) => {
  const [loading, setLoading] = useState(true);
  const [daily_recent, setDaily_recent] = useState({});
  const [weekly_recent, setWeekly_recent] = useState({});
  const [plus_recent, setPlus_recent] = useState({});
  const [latam_recent, setLatam_recent] = useState({});
  const [impact_recent, setImpact_recent] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { setShowdetail, setDetaildata } = props;

  const onClick = (data, list) => {
    if (!isRoleAllowed(list)) {
      setShowModal(true);
    } else {
      setShowdetail(true);
      setDetaildata(data);
    }
  };
  useEffect(() => {
    setLoading(true);
    http
      .get("get-latest-post")
      .then((res) => {
        setDaily_recent(res.data.data["daily"]);
        setWeekly_recent(res.data.data["weekly"]);
        setPlus_recent(res.data.data["plus"]);
        setLatam_recent(res.data.data["agresource-latam"]);
        setImpact_recent(res.data.data["climate-impact"]);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="box-container">
      {showModal && <SubModal setShowModal={setShowModal} />}
      <h2 className="box-heading">{lang.updates.latest}</h2>
      {loading && (
        <div style={{ minHeight: "calc(6rem + 20px)" }}>
          <LoadingSpinner />
        </div>
      )}

      {!loading && (
        <div className="d-flex updates justify-content-between align-items-center">
          <UpdatesCard
            onClick={() => {
              onClick(daily_recent, [632, 631, 628]);
            }}
            image={daily_recent.image}
            text={daily_recent.title}
            timestamp={daily_recent.published_at}
          />
          <UpdatesCard
            onClick={() => {
              onClick(weekly_recent, [636, 637, 638]);
            }}
            image={weekly_recent.image}
            text={weekly_recent.title}
            timestamp={weekly_recent.published_at}
          />
          <UpdatesCard
            onClick={() => {
              onClick(plus_recent, [639, 640, 641]);
            }}
            image={plus_recent.image}
            text={plus_recent.title}
            timestamp={plus_recent.published_at}
          />
          <UpdatesCard
            onClick={() => {
              onClick(latam_recent, [642, 643, 644]);
            }}
            image={latam_recent.image}
            text={latam_recent.title}
            timestamp={latam_recent.published_at}
          />
          <UpdatesCard
            onClick={() => {
              onClick(impact_recent, [645, 646, 647]);
            }}
            image={impact_recent.image}
            text={impact_recent.title}
            timestamp={impact_recent.published_at}
          />
        </div>
      )}
    </div>
  );
};

export default Updates;
