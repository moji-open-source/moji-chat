'use client'

import * as React from 'react'
import * as ListboxPrimitive from 'react-listbox-primitives'
import { CheckIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

type ListboxProps = React.ComponentProps<typeof ListboxPrimitive.ListboxRoot>

type ListboxLabelProps = React.ComponentPropsWithoutRef<
  typeof ListboxPrimitive.ListboxLabel
>

type ListboxContentProps = React.ComponentPropsWithoutRef<
  typeof ListboxPrimitive.ListboxContent
>

type ListboxItemProps = React.ComponentPropsWithoutRef<
  typeof ListboxPrimitive.ListboxItem
>

type ListboxGroupProps = React.ComponentPropsWithoutRef<
  typeof ListboxPrimitive.ListboxGroup
>

type ListboxGroupLabelProps = React.ComponentPropsWithoutRef<
  typeof ListboxPrimitive.ListboxGroupLabel
>

const Listbox = ListboxPrimitive.ListboxRoot

const ListboxLabel = React.forwardRef<HTMLDivElement, ListboxLabelProps>(
  ({ className, ...props }, ref) => (
    <ListboxPrimitive.ListboxLabel
      ref={ref}
      className={cn('text-sm font-medium leading-none', className)}
      {...props}
    />
  ),
)
ListboxLabel.displayName = ListboxPrimitive.ListboxLabel.displayName

const ListboxContent = React.forwardRef<HTMLDivElement, ListboxContentProps>(
  ({ className, ...props }, ref) => (
    <ListboxPrimitive.ListboxContent
      ref={ref}
      className={cn(
        'overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-none transition-colors focus-visible:ring-1 focus-visible:ring-ring data-disabled:cursor-not-allowed data-disabled:opacity-50 data-[orientation=horizontal]:flex data-[orientation=horizontal]:overflow-x-auto data-[orientation=horizontal]:overflow-y-hidden',
        className,
      )}
      {...props}
    />
  ),
)
ListboxContent.displayName = ListboxPrimitive.ListboxContent.displayName

const ListboxGroup = React.forwardRef<HTMLDivElement, ListboxGroupProps>(
  ({ className, ...props }, ref) => (
    <ListboxPrimitive.ListboxGroup
      ref={ref}
      className={cn('p-1', className)}
      {...props}
    />
  ),
)
ListboxGroup.displayName = ListboxPrimitive.ListboxGroup.displayName

const ListboxGroupLabel = React.forwardRef<
  HTMLDivElement,
  ListboxGroupLabelProps
>(({ className, ...props }, ref) => (
  <ListboxPrimitive.ListboxGroupLabel
    ref={ref}
    className={cn('px-2 py-1.5 text-sm font-semibold text-muted-foreground', className)}
    {...props}
  />
))
ListboxGroupLabel.displayName =
  ListboxPrimitive.ListboxGroupLabel.displayName

const ListboxItem = React.forwardRef<HTMLDivElement, ListboxItemProps>(
  ({ className, children, asChild, ...props }, ref) => (
    <ListboxPrimitive.ListboxItem
      ref={ref}
      asChild={asChild}
      className={cn(
        'group relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 text-sm outline-none transition-colors data-disabled:pointer-events-none data-disabled:opacity-50 data-highlighted:bg-accent data-highlighted:text-accent-foreground data-[state=checked]:font-medium [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
        !asChild && 'pl-8 pr-2',
        className,
      )}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <>
          <span className="absolute left-2 flex size-3.5 items-center justify-center opacity-0 group-data-[state=checked]:opacity-100">
            <CheckIcon aria-hidden="true" />
          </span>
          {children}
        </>
      )}
    </ListboxPrimitive.ListboxItem>
  ),
)
ListboxItem.displayName = ListboxPrimitive.ListboxItem.displayName

const ListboxList = ListboxContent

const ListboxOption = ListboxItem

export {
  Listbox,
  ListboxContent,
  ListboxGroup,
  ListboxGroupLabel,
  ListboxItem,
  ListboxLabel,
  ListboxList,
  ListboxOption,
}

export type {
  ListboxContentProps,
  ListboxGroupLabelProps,
  ListboxGroupProps,
  ListboxItemProps,
  ListboxLabelProps,
  ListboxProps,
}
