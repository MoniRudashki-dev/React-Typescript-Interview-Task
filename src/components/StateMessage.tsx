import "../styles/stateMessage.scss";

type StateMessageProps = {
  title: string;
  description?: string;
  actions?: React.ReactNode;
};

export const StateMessage = ({
  title,
  description,
  actions,
}: StateMessageProps) => {
  return (
    <div className="stateMessage glass" role="status" aria-live="polite">
      <h2 className="stateMessage__title">{title}</h2>
      {description ? (
        <p className="stateMessage__description">{description}</p>
      ) : null}
      {actions ? <div className="stateMessage__actions">{actions}</div> : null}
    </div>
  );
};

export default StateMessage;
