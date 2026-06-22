import useCountUp from "../../hooks/useCountUp";

// Animated number that counts up when scrolled into view.
export default function StatCounter({ value, suffix = "", className }) {
  const { ref, value: current } = useCountUp(value);
  return (
    <span ref={ref} className={className}>
      {current}
      {suffix}
    </span>
  );
}
