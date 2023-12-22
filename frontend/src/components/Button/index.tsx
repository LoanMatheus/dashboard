'use client'
import * as Component from "primereact/button";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";

interface ButtonProps {
  children?: React.ReactNode
  badge?: string
  badgeClassName?: string
  disabled?: boolean
  icon?: React.ReactNode
  text?: boolean
  rounded?: boolean
  raised?: boolean
  outlined?: boolean
  link?: boolean
  severity?: "success" | "help" | "warning" | "secondary" | "info" | "danger"
  size?: "small" | "large"
  iconPos?: "left" | "top" | "bottom" | "right"
  label?: string
  loading?: boolean
  loadingIcon?: React.ReactNode
  tooltip?: string
  tooltipOptions?: TooltipOptions
  visible?: boolean
}

export default function Button(props: ButtonProps) {
  const {

    children,
    badge,
    badgeClassName,
    disabled = false,
    icon,
    text = false,
    rounded = false,
    raised = false,
    outlined = false,
    link = false,
    severity,
    size,
    iconPos = 'left',
    label,
    loading = false,
    loadingIcon,
    tooltip,
    tooltipOptions,
    visible = true,
  } = props;

  return (
    <Component.Button
      badge={badge}
      badgeClassName={badgeClassName}
      disabled={disabled}
      icon={icon}
      text={text}
      rounded={rounded}
      raised={raised}
      outlined={outlined}
      link={link}
      severity={severity}
      size={size}
      iconPos={iconPos}
      label={label}
      loading={loading}
      loadingIcon={loadingIcon}
      tooltip={tooltip}
      tooltipOptions={tooltipOptions}
      visible={visible}
    >
      {children}
    </Component.Button>
  )
}